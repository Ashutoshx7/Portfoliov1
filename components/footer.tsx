import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Ashutoshx7',
      icon: Github
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com',
      icon: Twitter
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com',
      icon: Linkedin
    },
    
  ]

  return (
    <footer className="w-full bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/40 dark:border-neutral-800/40">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 py-2 px-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm font-custom2 tracking-normal transition-colors duration-300 hover:text-neutral-900 dark:hover:text-neutral-100">
          Built with love by Karn Singh
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-50 opacity-70 hover:opacity-100 transition cursor-pointer"
                title={link.name}
              >
                <IconComponent size={15} />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer;