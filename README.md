# Inventive Engineering Solution Website

Marketing and corporate website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Content and asset structure

- Site-wide details: `/home/runner/work/inventive-es/inventive-es/src/data/site.ts`
- Products and detail pages: `/home/runner/work/inventive-es/inventive-es/src/data/products.ts`
- Clients and projects: `/home/runner/work/inventive-es/inventive-es/src/data/clients.ts`, `/home/runner/work/inventive-es/inventive-es/src/data/projects.ts`
- Download items: `/home/runner/work/inventive-es/inventive-es/src/data/downloads.ts`
- Images and logos: `/home/runner/work/inventive-es/inventive-es/public/images`, `/home/runner/work/inventive-es/inventive-es/public/logos`
- PDFs and brochures: `/home/runner/work/inventive-es/inventive-es/public/pdfs`

Replace placeholder logos/images/PDFs with approved production assets while keeping the same paths, or update references in data files.

## Contact form

- UI: `/home/runner/work/inventive-es/inventive-es/src/components/ContactForm.tsx`
- API endpoint: `/home/runner/work/inventive-es/inventive-es/src/app/api/contact/route.ts`

The API route includes validation and a honeypot field (`website`) for basic spam filtering. A mailto fallback is provided on the contact page.

## SEO

- Metadata and OG defaults: `/home/runner/work/inventive-es/inventive-es/src/app/layout.tsx`
- Organization structured data: `/home/runner/work/inventive-es/inventive-es/src/app/page.tsx`
- Sitemap and robots: `/home/runner/work/inventive-es/inventive-es/src/app/sitemap.ts`, `/home/runner/work/inventive-es/inventive-es/src/app/robots.ts`
