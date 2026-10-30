# aryanballani.github.io

Personal site, built with [Astro](https://astro.build) + Tailwind CSS. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
npm run preview
```

## Editing content

| What | Where |
|---|---|
| Projects | `src/content/projects/*.md`, one file per project. `featured: true` gets a full card; the rest go in "More projects". `order` sets position. `private: "<message>"` makes the card open a dialog instead of a link. |
| Experience | `src/content/experience/*.md` (omit `end` for "Present") |
| Skills, socials, email, birth date | `src/data/site.ts` |
| Hero facts / tagline | `src/components/Hero.astro` |
| Resume | `public/resume/resume.pdf` (keep the filename; it's linked from several places) |
| Hover logo for a project card | `logo:` key → `src/assets/tech/<key>.svg` (add new keys to `techLogos` in `src/content.config.ts`) |

Frontmatter is validated by the schemas in `src/content.config.ts`, so a typo fails the build instead of shipping.

## Easter eggs 🥚

Keep these alive when changing things:

1. The age ticks live (`AgeTicker.astro`)
2. Hovering the age shows it to 9 decimals, following the cursor
3. Clicking the age (see "☝️ Click above") clickbaits you into the resume
4. The profile picture does a flip every 4 seconds (`Hero.astro`)
5. The Rubik's cube PB line
6. The experience section is called **XP++**
7. Dep2Phrase's card says the repo is private and a paper is in the works
8. Hovering a project card blurs it and reveals the tech logo (`ProjectCard.astro`)
9. The AB logo (hand-made, `src/assets/nav-logo.svg`) grows on hover and is the favicon
10. ⌘K / Ctrl+K / `/` opens the command palette (`CommandPalette.astro`)
