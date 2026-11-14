# aryanballani.github.io

Personal site, built with [Astro](https://astro.build) + Tailwind CSS. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
npm run preview
```

## Pages

| Route | File | Contents |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero (About), XP++, Skills |
| `/projects/` | `src/pages/projects.astro` | Projects |

Every page shares `src/layouts/Page.astro` (nav, footer, ⌘K palette). Nav links live in `nav` in `src/data/site.ts`.

## Editing content

| What | Where |
|---|---|
| Projects | `src/content/projects/*.md`, one file per project. `featured: true` gets a full card; the rest go in "More projects". `order` sets position. Each gets **Demo** and **Code** buttons from `demo` (video, live site or PDF; set `demoLabel: Report` for write-ups) and `repo`. `image` adds a screenshot to the card (put files in `src/assets/projects/`). `private: "<message>"` makes the card open a dialog instead of a link. |
| Railtown work | `group: railtown` on a project puts it under "At Railtown AI"; add `internal: true` for closed-source work (no links). The Railtracks case study (stats, PRs) lives in `src/data/railtracks.ts`; bump `asOf` there when refreshing numbers (it isn't shown on the site). |
| GitHub activity strip | `src/data/activity.json`, combined from both GitHub accounts. Refreshed automatically on every deploy; run `npm run activity` to refresh locally. |
| Experience | `src/content/experience/*.md` (omit `end` for "Present"; `links` adds proof links under a role) |
| Skills, socials, email, birth date | `src/data/site.ts` |
| Hero facts / tagline | `src/components/Hero.astro` |
| Resumes | `public/resume/resume.pdf` (software) and `public/resume/resume-data-engineering.pdf`. Keep the filenames; they're linked from outside the site. The list is `resumes` in `src/data/site.ts`. |

Frontmatter is validated by the schemas in `src/content.config.ts`, so a typo fails the build instead of shipping.

## SEO

| What | Where |
|---|---|
| Title, description, job title | `site` in `src/data/site.ts` (`/projects/` sets its own in `src/pages/projects.astro`) |
| Canonical / Open Graph tags | `src/layouts/Base.astro`. Pass `noindex` for pages that shouldn't be indexed (the 404 does). |
| Person JSON-LD | `src/components/PersonSchema.astro`, home page only |
| Sitemap, robots.txt | `@astrojs/sitemap` in `astro.config.mjs` and `src/pages/robots.txt.ts`, generated at build time |
| Link-preview card | `public/og.png`, rendered from `scripts/og-image.html` with `npm run og` (uses Brave by default; set `BROWSER` to another Chromium path). Re-run after changing the photo or title. |
| Search Console verification | Paste the HTML-tag token into `googleSiteVerification` in `src/data/site.ts` |

**Custom domain:** every absolute URL (canonical, OG, JSON-LD, sitemap, robots.txt) comes from `site` in `astro.config.mjs`. When switching domains, change it there and set the domain under Settings → Pages (no `CNAME` file needed, since the site deploys through Actions).

## Easter eggs 🥚

Keep these alive when changing things:

1. The age ticks live (`AgeTicker.astro`)
2. Hovering the age shows it to 9 decimals, following the cursor
3. Clicking the age (see "☝️ Click above") clickbaits you into the resume
4. The Rubik's cube PB line
5. The experience section is called **XP++**
6. Dep2Phrase's card says the repo is private and a paper is in the works
7. The AB logo (hand-made, `src/assets/nav-logo.svg`) grows on hover and is the favicon
8. ⌘K / Ctrl+K / `/` opens the command palette (`CommandPalette.astro`)
