# Steal An Egg Wiki

English fan-made Roblox wiki for **Steal An Egg** by **and Collect Rare Pets** (Place ID `107778070777162`).

Production URL: <https://steal-an-egg.github.io/>

## MVP structure

- `/` — complete homepage and SEO topic hub
- `/eggs/` and `/eggs/rare-eggs/`
- `/pets/`
- `/guide/`
- `/progression/` and `/progression/speed-treadmill/`
- `/codes/`
- `/updates/`

The website uses Next.js App Router, TypeScript and Tailwind CSS. It exports to the `out/` directory as a fully static GitHub Pages site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Push the `main` branch to `steal-an-egg/steal-an-egg.github.io`. The GitHub Pages workflow builds the project and deploys the generated `out/` directory. The build includes trailing-slash routes, unoptimized static images, `.nojekyll`, `robots.txt`, `sitemap.xml` and AI-readable site summaries.

## Content policy

Do not invent egg odds, pet income, upgrade costs, speed requirements, codes or update dates. Use verified gameplay evidence and keep unknown values marked as `To be verified`.
