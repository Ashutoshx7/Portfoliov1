
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type DisplacementTextProps = {
  text?: string;
  fontSize?: number;
  font?: string;
  color?: string;
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

const createTextTexture = (
  text: string,
  size: number,
  font: string,
  color: string
): THREE.Texture => {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 2048;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `bold ${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const vertexShader = `
  varying vec2 vUv;
  uniform vec3 uDisplacement;

  float easeInOutCubic(float x) {
    return x < 0.5 ? 4. * x * x * x : 1. - pow(-2. * x + 2., 3.) / 2.;
  }

  float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  }

  void main() {
    vUv = uv;
    vec3 displaced = position;

    vec4 localPosition = vec4(position, 1.0);
    vec4 worldPosition = modelMatrix * localPosition;

    float dist = length(uDisplacement - worldPosition.rgb);
    float minDistance = 3.0;

    if (dist < minDistance) {
      float mapped = map(dist, 0.0, minDistance, 1.0, 0.0);
      float val = easeInOutCubic(mapped);
      displaced.z += val;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main() {
    vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = color;
  }
`;

const DisplacementText = ({
  text = " Karn Singh 💓",
  fontSize = 200,
  font = "custom2",
  color,
  lightColor = "#000000",
  darkColor = "#ffffff",
  className,
}: DisplacementTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 1;
    const height = rect.height || container.clientHeight || 1;

    if (height === 0) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = null;

    const cameraDistance = 8;
    const aspect = width / height;
    const camera = new THREE.OrthographicCamera(
      -cameraDistance * aspect,
      cameraDistance * aspect,
      cameraDistance,
      -cameraDistance,
      0.01,
      1000
    );

    camera.position.set(0, -10, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(15, 15, 100, 100);
    const getActiveColor = () => {
      if (color) {
        return color;
      }
      return document.documentElement.classList.contains("dark")
        ? darkColor
        : lightColor;
    };

    let currentColor = getActiveColor();
    let textTexture = createTextTexture(text, fontSize, font, currentColor);

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: textTexture },
        uDisplacement: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const plane = new THREE.Mesh(geometry, shaderMaterial);
    plane.rotation.z = Math.PI / 4;
    scene.add(plane);

    const hitPlaneGeometry = new THREE.PlaneGeometry(500, 500, 10, 10);
    const hitPlaneMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const hitPlane = new THREE.Mesh(hitPlaneGeometry, hitPlaneMaterial);
    hitPlane.name = "hit";
    scene.add(hitPlane);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const [intersection] = raycaster.intersectObject(hitPlane);
      if (!intersection) {
        return;
      }

      (shaderMaterial.uniforms.uDisplacement.value as THREE.Vector3).copy(
        intersection.point
      );
    };

    container.addEventListener("pointermove", onPointerMove);

    const handleResize = () => {
      const nextRect = container.getBoundingClientRect();
      if (nextRect.height === 0) {
        return;
      }
      const nextAspect = nextRect.width / nextRect.height;
      camera.left = -cameraDistance * nextAspect;
      camera.right = cameraDistance * nextAspect;
      camera.top = cameraDistance;
      camera.bottom = -cameraDistance;
      camera.updateProjectionMatrix();
      renderer.setSize(nextRect.width, nextRect.height, false);
    };

    window.addEventListener("resize", handleResize);

    let animationId = 0;
    const renderScene = () => {
      animationId = window.requestAnimationFrame(renderScene);
      renderer.render(scene, camera);
    };

    renderScene();

    const replaceTexture = (nextColor: string) => {
      const nextTexture = createTextTexture(text, fontSize, font, nextColor);
      nextTexture.needsUpdate = true;
      shaderMaterial.uniforms.uTexture.value = nextTexture;
      textTexture.dispose();
      textTexture = nextTexture;
      currentColor = nextColor;
    };

    let observer: MutationObserver | undefined;
    let mediaQueryCleanup: (() => void) | undefined;

    if (!color) {
      const handleThemeChange = () => {
        const nextColor = getActiveColor();
        if (nextColor === currentColor) {
          return;
        }
        replaceTexture(nextColor);
      };

      observer = new MutationObserver(handleThemeChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      if (window.matchMedia) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const mediaHandler = () => handleThemeChange();

        if (typeof mediaQuery.addEventListener === "function") {
          mediaQuery.addEventListener("change", mediaHandler);
          mediaQueryCleanup = () => mediaQuery.removeEventListener("change", mediaHandler);
        } else if (typeof mediaQuery.addListener === "function") {
          mediaQuery.addListener(mediaHandler);
          mediaQueryCleanup = () => mediaQuery.removeListener(mediaHandler);
        }
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(animationId);
      observer?.disconnect();
      mediaQueryCleanup?.();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      textTexture.dispose();
      geometry.dispose();
      hitPlaneGeometry.dispose();
      hitPlaneMaterial.dispose();
      shaderMaterial.dispose();
    };
  }, [text, fontSize, font, color, lightColor, darkColor]);

  return (
    <div ref={containerRef} className={cn("relative h-200 w-full", className)} />
  );
};

export default DisplacementText;

