# Des-composición-Kids - Project Memory

## Description
Interactive website for children to learn numerical decomposition and composition from 1 to 199 using banknotes of $100, $10, and coins of $1.

## Tech Stack
- React (TypeScript)
- Vite
- Framer Motion (Animations)
- Lucide React (Icons)
- Vanilla CSS

## Features implemented
- [x] Initial setup with Vite + React + TS.
- [x] "Parents Mode" to set the target number (1-199).
- [x] Three drop zones: Centenas ($100), Decenas ($10), Unidades ($1).
- [x] Dynamic decomposition formula display (e.g., 100 + 60 + 8 = 168).
- [x] Real-time total calculation.
- [x] Smart feedback system:
    - Success: Exact match.
    - Error: Not enough money.
    - Over: Exceeded the target.
- [x] Layout optimizations (removed scrollbars, child-friendly styling).
- [x] **Deployment**:
    - [x] Configured `vite.config.ts` with base path for GitHub Pages.
    - [x] Integrated `gh-pages` for automated deployment.

## How to run
### Local
1. Navigate to `Des-composición-Kids` directory.
2. Run `npm run dev -- --host --port 5174`.
3. Open `http://localhost:5174`.

### Online (GitHub Pages)
1. The project will be live at: `https://ch4rly-at.github.io/Des-composicion-Kids/`
2. To update the online version, run: `npm run deploy`

## Git Repository
- Remote: `https://github.com/ch4rly-at/Des-composicion-Kids.git`
