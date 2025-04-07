# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth animations using Framer Motion
- Contact form with email integration
- Social media links
- Project showcase
- Blog section
- About section with skills and experience

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons
- React Hook Form
- EmailJS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```


## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
└── styles/               # Global styles
```

## Customization

1. Update the content in `src/app/page.tsx` with your personal information
2. Modify the theme colors in `tailwind.config.js`
3. Add your projects in `src/app/projects/page.tsx`
4. Update social media links in `src/app/contact/page.tsx`



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
