# Muhammad Mussaddiq Ahmed Qureshi — Portfolio

Premium AURA-style professional portfolio website for a Senior Python Developer, Big Data Engineer, and Flask/FastAPI Backend Expert.

**Stack:** React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion

---

## Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder
```

---

## Deploy for Free

### Option 1 — Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done in ~60 seconds

**Custom domain:** Add your domain in Vercel dashboard → Domains

### Option 2 — Netlify

1. Push repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Option 3 — Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repo
3. Build command: `npm run build`
4. Build output: `dist`
5. Deploy

### Option 4 — GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

In `vite.config.js`, set `base: '/your-repo-name/'`

Then run:
```bash
npm run deploy
```

---

## Add Your CV File

Place your CV PDF at:
```
public/Muhammad-Mussaddiq-Ahmed-Qureshi-CV.pdf
```

The "Download CV" button will serve this file automatically.

---

## Updating Projects

Edit `src/data/projects.js`:

```js
export const featuredProjects = [
  {
    id: 9,                             // unique ID
    title: 'My New Project',
    category: 'api',                   // matches filter category ID
    categoryLabel: 'Flask / FastAPI',
    description: 'Brief description...',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    features: [
      'Feature one',
      'Feature two',
    ],
    impact: 'Business impact statement.',
    gradient: 'from-purple-600 to-blue-600',  // Tailwind gradient classes
    icon: '🚀',
  },
  // ...existing projects
]
```

Available category IDs: `bigdata`, `python`, `api`, `pipeline`, `spark`, `database`, `ml`, `ai`, `healthcare`, `aviation`, `hospitality`, `research`

---

## Updating Contact / Social Links

Edit `src/components/Contact.jsx` — find `socialLinks` array and update `href` values with your real profile URLs.

---

## Updating Personal Info

- **Hero:** `src/components/Hero.jsx`
- **About:** `src/components/About.jsx`
- **Experience:** `src/data/experience.js`
- **Education:** `src/components/Education.jsx`
- **Footer:** `src/components/Footer.jsx`

---

## File Structure

```
Newportfolio/
├── public/
│   ├── favicon.svg
│   └── Muhammad-Mussaddiq-Ahmed-Qureshi-CV.pdf  ← Add your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Quotes.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```
