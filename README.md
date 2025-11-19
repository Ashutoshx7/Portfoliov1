# Portfolio Website

A modern, responsive, and fast developer portfolio built using Next.js, Tailwind CSS, TypeScript, Framer Motion, MDX, and GitHub API integration.  
Features include blog support, project pages, contribution graph, SEO optimization, and a clean minimal design.

---

<img width="1184" height="946" alt="Screenshot 2025-11-19 151858" src="https://github.com/user-attachments/assets/b733ff81-b547-4ed0-9f11-8f8a55d9b761" />



## Live Demo

https://your-portfolio-url.com

---

## Features

- Next.js App Router architecture  
- Tailwind CSS with Shadcn UI  
- MDX support for blogs and project pages  
- GitHub Contribution Graph integration  
- Fetch GitHub repositories using API  
- Framer Motion animations  
- SEO and Open Graph metadata  
- Fully responsive and accessible  

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| Next.js    | React framework for production |
| TypeScript | Static typing |
| Tailwind CSS | Utility-first styling |
| Shadcn UI  | Accessible UI components |
| MDX        | Markdown with React support |
| Framer Motion | Animation library |
| GitHub API | Dynamic repo fetching |
| Vercel     | Deployment platform |

---

## Environment Variables

Create a `.env` file in the root directory:

```env


# Required for GitHub API repo fetching
#So create .env in your root and add your github token 
GITHUB_TOKEN="your_github_personal_access_token"


git clone https://github.com/yourusername/portfolio.git
cd portfolio

npm install
# or
bun install

Run the development server
npm run dev
# or
bun dev

http://localhost:3000


Deployment
Deploy to Vercel

After deploying, set the GITHUB_TOKEN in Vercel Environment Settings if needed.

License

This project is licensed under the MIT License

