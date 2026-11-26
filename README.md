# Arklogs portfolio template

An Astro portfolio with Home, About Me, Achievements, Projects, and Blog. The homepage cards, responsive layout, blog archive, and RSS feed are ready to customize.

## Run locally

Use Node 22.19 or newer. Run `npm install` and `npm run dev`. Run `npm run build` for a static build in `dist/`.

## Customize

- Edit the site identity in `src/layouts/BaseLayout.astro` and the homepage cards in `src/data/content.ts`.
- Fill in the About Me, Achievements, and Projects pages under `src/pages/`.
- Copy `src/content/posts/post-template.md` to start a post. Set `draft: false` when it is ready to publish. Categories are Field notes, CTF, Security, and Hardware. Optional fields include `tags`, `archiveCategory`, `cover`, `coverAlt`, and `language`.
- Set the public site URL in `src/pages/rss.xml.ts` after deploying your copy.
