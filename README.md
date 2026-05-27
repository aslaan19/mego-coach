# MEGO — Physique Coach Website

## Setup

```bash
npm install
npm run dev
```

## Before Going Live — Checklist

### 1. Add Your Logo
Copy your MEGO logo as `public/logo.png`

### 2. Add Your Training Videos
In `src/components/Hero.jsx`, replace the placeholder divs with:
```jsx
<video src="/videos/video1.mp4" autoPlay muted loop playsInline />
```
Place video files in `public/videos/`.

### 3. Add Your Photo
In `src/components/About.jsx`, replace the placeholder with:
```jsx
<img src="/coach-photo.jpg" alt="Coach MEGO" />
```
Place the photo as `public/coach-photo.jpg`.

### 4. Update Social Follower Counts
In `src/components/Stats.jsx`, update `target` values to your current follower counts.

## Deploy to Vercel / Netlify

```bash
npm run build
# → uploads the "dist/" folder
```

Or push to GitHub and connect Vercel — it auto-detects Vite.
