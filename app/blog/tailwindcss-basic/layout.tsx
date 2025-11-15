import Container from "@/components/containers";

export const metadata: Metadata = {
  title: "Karn",
  description: "A perfect portfolio website template that showcases my skills and learning",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-screen  md:p-20 md:pb-10 font-custom2 tracking-tighter">
      <article className="prose prose-lg dark:prose-invert max-w-none">{children}</article>
    </Container>
  );
}