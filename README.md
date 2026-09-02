# Women’s Voices website

The public website for Women’s Voices in Longsight, Manchester. It is built with
Next.js App Router, React, TypeScript and a single self-hosted Raleway font.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Site URL

The default metadata URL is `https://womenvoices4.vercel.app`. Set
`NEXT_PUBLIC_SITE_URL` in Vercel if the final production domain is different.

## Main directories

- `src/app` — routes, metadata, sitemap and robots configuration
- `src/components` — shared header, footer and page shell
- `src/lib/site.ts` — navigation, contact details, social links and route list
- `public` — optimized images, video and brand assets
