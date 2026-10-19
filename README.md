# Arklogs

An Astro portfolio and personal blog for hardware projects, security research, CTF writeups, and field notes. The current interface is inspired by the information density and stage navigation of Arknights event menus. Its CSS shapes are placeholders for the owner's hand-drawn artwork; no game artwork is included.

## Run locally

Use Node 22.19 or newer, then:

```sh
npm install
npm run dev
```

Open the URL printed by Astro. `npm run build` creates the static site in `dist/`; `npm run preview` serves that build locally. Vercel can deploy the repository using the Astro preset and `npm run build`.

## Add content

Create a Markdown file in `src/content/posts/` with `title`, `description`, `date`, and `category` frontmatter. Allowed categories are `Field notes`, `CTF`, `Security`, and `Hardware`. Set `draft: true` to keep an unfinished post out of the public build. Published posts appear automatically in `/writing/`.

The project areas and navigation are defined in `src/data/content.ts`. Replace the placeholder artwork in the CSS and page markup with the owner's own drawings as they become available. Avoid publishing unverified project claims or sensitive research details.

## Fonts

Oswald is used for headings, and Noto Sans SC is bundled for Chinese and other Han text fallback. The style system also names the requested Nuber Next, Novecento Sans Wide, Bender, FZYaSong-H-GBK, and AddWBitmap09 families. Those files were not present locally, so browsers fall back to bundled fonts. Add appropriately licensed webfont files before expecting visitors to see those exact families. Do not commit desktop-only or trial font files as webfonts.

## Image sources

The following representative images are stored in `public/images/`. Their Wikimedia Commons file pages identify them as CC0; they are not photos of the owner's projects.

- `hardware.jpg`: [ESP32 development board](https://commons.wikimedia.org/wiki/File:ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg), Ubahnverleih.
- `security.jpg`: [Rear of rack at NERSC data center](https://commons.wikimedia.org/wiki/File:Rear_of_rack_at_NERSC_data_center.jpg), Derrick Coetzee.
- `ctf.jpg`: [Code on computer monitor](https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg), Markus Spiske.
- `notes.jpg`: [White Printed Circuit Board](https://commons.wikimedia.org/wiki/File:White_Printed_Circuit_Board.JPG), gunthercox.
