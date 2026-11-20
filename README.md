# Soccer4Everyone

The website for Soccer4Everyone, a football nonprofit in Surat, India. It runs Sunday-league tournaments and uses the entry fees and sponsorship to give boots, kit and coached sessions to 9 to 14 year-olds who can't afford them.

**Live site:** https://soccer4everyone.vercel.app

## The numbers the site tells

- $65K raised in the first nine months
- 450+ athletes, aged 9 to 14, trained and kitted
- 71 signed by professional clubs and leagues in India
- 11 invited to national team tryouts

## What's on the page

A single scrolling page: hero, impact figures, how the model works, a matchday section on the tournament, the kit each player receives, the girls' bracket, the season cycle, the founder and a partner call to action.

## Stack

- Next.js 15 (App Router) and React 19
- Tailwind CSS v4
- Framer Motion for animation, Lenis for smooth scrolling
- Big Shoulders Display and Geist fonts, self-hosted through Fontsource
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| Path | What it holds |
|---|---|
| `src/lib/content.ts` | Every figure and line of copy, so one number never reads two ways |
| `src/components/` | One component per page section |
| `src/app/page.tsx` | The order of the sections |
| `public/img/` | Photos |
