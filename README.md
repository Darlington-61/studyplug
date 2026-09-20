# Study Plug - Mobile App Design Replication

Pixel-perfect replication of the **Study Plug** mobile learning and exam preparation application.

## Overview
This application replicates the 3 screens shown in the design specification:
1. **Screen 1: Home Dashboard** - Brand header, gradient promotional hero banner with 3D trophy/books/target, 2x2 Quick Start cards, progress tracking with 7-day study streak, and bottom navigation bar.
2. **Screen 2: Choose Subject** - Exam categories (All, JAMB, WAEC, NECO, POST UTME), search, and 8 subject cards with custom color-coded icons and question counts.
3. **Screen 3: Mathematics Exam Test** - Purple header with Exit Test, live countdown timer, question counter (`12 / 50`), segmented tabs (Questions, Overview, Bookmark), Question 12 with selected option B (`17`), Previous/Next buttons, interactive 1–50 question palette grid with color-coded status, and legend.

## Modes
- **Showcase View (Default)**: Displays all 3 mobile phones side-by-side inside realistic iPhone frames, mirroring the exact mockup presentation.
- **Interactive Prototype**: Allows navigating through the screens interactively, selecting subjects, choosing options, running the timer, jumping through questions, and bookmarking.
- **Scale Controls**: Toggle between 85%, 92%, and 100% viewport zoom for comfortable viewing on any screen.

## Running Locally

```bash
npm install
npm run dev
```

To create a production build:
```bash
npm run build
```
