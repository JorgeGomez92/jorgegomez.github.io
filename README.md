# Jorge Gómez — Portfolio

A clean English portfolio for web development, Unreal Engine and interactive virtual-environment work.

## Page order

1. Profile
2. Experience
3. Websites
4. Video Projects
5. Minimal footer with email, resume, GitHub and Instagram

The social links are:

- GitHub: https://github.com/JorgeGomez92
- Instagram: https://www.instagram.com/jorge.gci/

## Open locally

Open `index.html` directly, or serve the folder with a static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Website captures

Website work is separated from video work. The four website cards use the local screenshots supplied for:

- HAUZ
- Clairvant
- The Line Production Lab
- Mi Ciudad Inteligente

There are no remote screenshot services or live iframes in the gallery.

## Video projects

Every full MP4 is represented by a separate project card. There are **15 video cards** and none contains a Previous/Next sequence.

- `media/full/` — full project videos
- `media/previews/` — one hover preview per card
- `media/posters/` — one static cover per card

Only video cards use hover previews. Website cards remain static.

## Editing content

- Profile and experience: `index.html`
- Website entries and video-project data: `script.js`
- Visual design and responsive behavior: `style.css`
- Resume: `docs/Jorge-Gomez-Resume.pdf`

## GitHub Pages

This folder is ready for GitHub Pages and includes `.nojekyll`. See `DEPLOY-GITHUB-PAGES.md` for the exact publication steps and the recommended repository name.

## Validation targets

- 4 website cards
- 15 independent video-project cards
- 5 video filters
- Desktop and 390 px mobile layouts
- Modal display for website captures and individual videos
- No horizontal overflow on mobile
