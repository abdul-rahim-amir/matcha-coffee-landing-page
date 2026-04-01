# 🍃 Artisan Iced Dirty Matcha Latte — Scrollytelling Landing Page

A premium, Awwwards-level scrollytelling experience built with **Next.js 14**, **Framer Motion**, and **HTML5 Canvas**. This project features a 174-frame high-impact "time-freeze" image sequence that reacts dynamically to the user's scroll.

![Project Preview](https://via.placeholder.com/1200x600/050505/FFFFFF?text=Artisan+Matcha+Experience)

## 💎 Features

- **Cinematic Scrollytelling**: A seamless 174-frame image sequence rendered on Canvas for 60fps performance during scroll.
- **Premium "Deep Black" Aesthetic**: Non-negotiable `#050505` background matching image sequences for a void-like, immersive feel.
- **Luxury Typography**: Custom **Inter** font implementation with tight tracking and a minimalist tech/automotive aesthetic.
- **Dynamic Content Beats**: Four narrative overlay stages that fade and move parallax-style as the user explores.
- **Performance Optimized**: 
    - Intelligent image preloading with a stylized progress bar and spinner.
    - `useSpring` smoothed scroll interpolation for a "buttery" feel.
    - Canvas `contain`/`cover` logic for responsive edge-to-edge rendering.
- **Full Landing Page Structure**:
    - **Luxury Navbar**: Glassmorphic, minimal sticky navigation.
    - **Features Grid**: Animated reveal of product specs.
    - **Story & Philosophy**: Elegant typography with ambient glowing effects.
    - **Expertise FAQ**: Minimalist documentation section.
    - **Join the Ritual**: High-conversion newsletter CTA.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter)
- **Language**: TypeScript

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abdul-rahim-amir/matcha-coffee-landing-page.git
   ```
2. Navigate to the project directory:
   ```bash
   cd matcha-coffee-landing-page
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

- `src/components/MatchaScrollScene.tsx`: The core Canvas animation engine and scrollytelling logic.
- `src/app/page.tsx`: The main landing page assembly.
- `src/app/globals.css`: Global styles, custom scrollbar, and Tailwind configuration.
- `public/matcha-sequence/`: Directory containing the 174-frame image JPG sequence.

## 🎨 Design Philosophy
The design follows a "Less but Better" approach, inspired by brands like Apple and high-end automotive interfaces. Every interaction is designed to feel intentional, slow-paced, and exclusive.

---
Built by [Antigravity](https://antigravity.google) — Specializing in High-Performance Creative Development.
