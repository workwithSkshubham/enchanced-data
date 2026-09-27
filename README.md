# VIBRANIUM VAULT
### GeeksForGeeks Student Chapter — Bennett University
> **Technology • Innovation • Intelligence • Experience**  
> *Junior Core Technical Team Round 1 Submission*

---

## 1. Concept

**VIBRANIUM VAULT** is a premier Marvel-inspired digital experience and 36-hour technology symposium/hackathon website created for the **GeeksForGeeks Student Chapter, Bennett University**.

The concept reimagines the traditional hackathon portal as a classified, high-tech digital vault containing advanced technology, knowledge, and competitive challenges. Rather than directly copying copyrighted logos or comic book artwork, the design draws deep creative inspiration from **Doctor Strange's dimensional sacred geometry**, **Iron Man's holographic HUD diagnostics**, **Captain America's tactical Swiss mission dossiers**, **Thor's controlled electrical energy discharges**, and **Hulk's kinetic impact tremor dynamics**.

---

## 2. Event Overview & Centralized Configuration

All event information, dates, venues, tracks, luminaries, and FAQs are decoupled from UI components and stored in a single configuration file: [`src/data/eventData.js`](file:///c:/Users/user/Desktop/geeks%20for%20geek/src/data/eventData.js).

| Parameter | Configuration / Editable Placeholder |
| :--- | :--- |
| **Event Name** | VIBRANIUM VAULT 2026 |
| **Organizer** | GeeksForGeeks Student Chapter, Bennett University |
| **Date** | `[EVENT DATE: OCTOBER 24–25, 2026]` |
| **Time** | `[EVENT TIME: 09:00 AM IST – 09:00 PM IST (36 HRS)]` |
| **Venue** | `[VENUE: Auditorium 1 & Core Tech Labs, Bennett University]` |
| **Registration** | `[REGISTRATION LINK: FREE ENTRY // ENLISTMENT OPEN]` |
| **Coordinates** | 28.4509° N, 77.5842° E (Greater Noida, Delhi-NCR) |
| **Clearance** | `CLASSIFIED // LEVEL-07` |

---

## 3. Design Direction & Visual Identity

The interface bridges **Minimalist + Editorial + Swiss Design** with a **Dark Cinematic Marvel Aesthetic**:

- **Color Palette (Mystic Green & Violet)**:
  - Deep Obsidian Canvas: `#050505`, `#080A0C`, `#0D1110`
  - Mystic Emerald Green: `#19E68C` (Glow: `rgba(25, 230, 140, 0.35)`)
  - Mystical Violet: `#8B5CF6` (Glow: `rgba(139, 92, 246, 0.35)`)
  - Subtle Energy Spark Accent: `#FF8A3D`
  - Off-White Editorial Typography: `#F4F4F0`
  - Telemetry Muted Gray: `#8A8F98`
- **Typography Hierarchy**:
  - **Display / Kinetic Titles**: `Space Grotesk` (Google Fonts)
  - **Branding & Accents**: `Syne` (Google Fonts)
  - **Body & UI**: `Inter` (Google Fonts)
  - **Telemetry & Monospace**: `JetBrains Mono` (Google Fonts)
- **Swiss Grid Discipline**: Asymmetrical 12-column layouts, generous negative space, bold section indices (`01 // MANIFESTO`), and structured data hierarchy.

---

## 4. Key Features & Interaction Vocabulary

1. **Short Vault Intro Loader**:
   - Initializing sequence: `01 SYSTEM INITIALIZING` ➔ `02 ENERGY CORE ONLINE` ➔ `03 VAULT UNLOCKED`.
   - Automatically completes in ~2 seconds, with an instant `[ESC] / SKIP` button and respect for `prefers-reduced-motion`.
2. **Glassmorphism Navbar**:
   - Sticky backdrop blur (`blur(20px)`), scroll-reactive border tint, and live active-section tracking.
   - Built-in Web Audio API synthesizer for an ethereal ambient drone and tactical feedback clicks.
   - Animated mobile drawer with accessible focus trap.
   - View Transition API support (`document.startViewTransition`) with seamless standard scroll fallback.
3. **Cinematic Hero**:
   - Aurora ambient gradients + subtle SVG fractal film grain texture.
   - Large kinetic typography composition ("VIBRANIUM VAULT").
   - Live countdown timer (Days, Hours, Minutes, Seconds).
   - HUD telemetry strips with Bennett University campus coordinates (`28.4509° N, 77.5842° E`).
4. **3D Vibranium Core Hero Object**:
   - Built with **Three.js WebGL**: Concentric counter-rotating titanium and emerald/violet rune rings, central polyhedral crystal, and orbiting spark particles.
   - Responsive cursor parallax tilt with smooth lerp physics.
   - Graceful CSS/SVG vector fallback for non-WebGL devices or low-power modes.
5. **Custom Desktop Cursor**:
   - Dual-layer dot and outer spotlight ring with contextual hover expansions and micro-labels.
   - Automatically disabled on touch screens, mobile devices, and `prefers-reduced-motion`.
6. **Tactile 3D Cards & Cursor Spotlight**:
   - Dynamic mouse-tracking border glow (`--mouse-x`, `--mouse-y`) and perspective 3D tilt across Highlights, Tracks, and Speakers.
7. **Hulk-Inspired Impact Metrics**:
   - Scroll-triggered counter with a punchy spring-scale tremor (`₹5,00,000+` Prize Pool, `1,200+` Hackers, `36` Hours, `24+` Mentors).
8. **Tactical Swiss Timeline (Captain America Inspiration)**:
   - Day 1 (Inception & Forge) and Day 2 (Climax & Podium) tabs.
   - Progressive axis line illumination, expandable briefing notes, and 1-click `.ics` calendar file export.
9. **Curated Tracks & Luminary Dossiers**:
   - 4 Tracks: Neural Matrices (AI/ML), Cryptographic Vaults (Web3/Security), Quantum Systems (Low-level/Rust), Kinetic Web (Creative UI).
   - Interactive luminary profile cards with full modal dossier views and social links.
10. **Asymmetric Swiss Gallery**:
    - High-definition editorial masonry grid of hackathon nights, keynotes, and stage ceremonies.
    - Fullscreen interactive lightbox modal with keyboard navigation (Esc, Left/Right arrows).
11. **Interactive 3D Holographic Vault Pass Generator**:
    - Real-time personalization: attendees enter their name and track to generate a 3D metallic holographic card with iridescent foil sheen, QR code, and ticket ID (`#VV-2026-XXXX`).
    - Confetti celebration burst (`canvas-confetti`) on pass claim.
12. **Morphing FAQ Accordion**:
    - Zero-jank CSS grid transition (`grid-template-rows: 0fr -> 1fr`), live keyword search filter, category filter pills, and complete ARIA attributes (`aria-expanded`, `role="region"`).
13. **Infinite Marquee & Magnetic Footer**:
    - Continuous kinetic ticker strip, magnetic spring social icons, and smooth return-to-surface button.

---

## 5. Tech Stack

- **Core**: React 19, HTML5 Semantic Elements
- **Build Tool**: Vite 8
- **3D Graphics**: Three.js (Procedural geometries, Torus rings, particle points)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Celebration Effects**: Canvas Confetti
- **Audio Synthesis**: Native Web Audio API (Synthesized oscillators, zero external audio MP3 files)
- **Styling**: Modern CSS3 (CSS Custom Properties, CSS Grid, Flexbox, Backdrop Filter, 3D Transforms, SVG Filters)

---

## 6. Project Structure

```
vibranium-vault/
├── public/
│   ├── favicon.svg                # Custom Vibranium Core SVG glyph
│   ├── images/                    # High-definition cinematic event photos
│   │   ├── gallery-1.jpg          # Night hackathon coding sprint
│   │   ├── gallery-2.jpg          # Keynote stage presentation
│   │   ├── gallery-3.jpg          # Grand prize winners celebration
│   │   ├── gallery-4.jpg          # Collaborative architecture session
│   │   ├── speaker-1.jpg          # AI Scientist portrait
│   │   ├── speaker-2.jpg          # Distributed Systems Engineer portrait
│   │   ├── speaker-3.jpg          # Cryptographic Security Lead portrait
│   │   └── speaker-4.jpg          # Creative Technologist portrait
│   ├── icons/                     # SVG icons & symbols
│   └── textures/                  # SVG procedural noise filters
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx       # Smooth desktop cursor & spotlight
│   │   ├── Navbar.jsx             # Sticky glassmorphism nav with audio toggle
│   │   ├── RegistrationModal.jsx  # Accessible dialog form with validation
│   │   ├── SocialIcons.jsx        # Hand-crafted SVG social icons
│   │   ├── TicketPassGenerator.jsx# 3D holographic digital pass synthesizer
│   │   ├── VaultLoader.jsx        # Classified initialization intro
│   │   └── VibraniumCore3D.jsx    # Three.js dimensional WebGL object & SVG fallback
│   ├── data/
│   │   └── eventData.js           # Central event configuration & metadata
│   ├── hooks/
│   │   └── useSoundFX.js          # Web Audio API ambient drone synthesizer
│   ├── sections/
│   │   ├── HeroSection.jsx        # Kinetic typography, countdown & HUD
│   │   ├── AboutSection.jsx       # Manifesto, GFG BU chapter & pillars
│   │   ├── HighlightsSection.jsx  # 3D perspective cards & impact metrics
│   │   ├── TracksSection.jsx      # 4 curated competition arenas
│   │   ├── TimelineSection.jsx    # Swiss tactical dossier & .ics export
│   │   ├── SpeakersSection.jsx    # Keynote luminaries & dossier modal
│   │   ├── GallerySection.jsx     # Asymmetric masonry & fullscreen lightbox
│   │   ├── RegistrationSection.jsx# Climax CTA & ticket generator
│   │   ├── FAQSection.jsx         # Morphing accordion with live search
│   │   └── FooterSection.jsx      # Infinite marquee & magnetic socials
│   ├── styles/
│   │   ├── main.css               # Design tokens, Swiss grid, base, HUD
│   │   └── sections.css           # Component layouts, cards, modals & animations
│   ├── App.jsx                    # Root composition & state coordination
│   ├── index.css                  # Global stylesheet aggregator
│   └── main.jsx                   # React 19 entrypoint
├── index.html                     # Semantic SEO meta tags, Google Fonts, SVG noise
├── package.json                   # Dependencies & build scripts
├── vite.config.js                 # Vite build configuration
└── README.md                      # Complete documentation
```

---

## 7. Installation & Running Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Steps
```bash
# 1. Clone or navigate to repository
cd "geeks for geek"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser at `http://localhost:5173/` to experience the website.

### Production Build
```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 8. Performance & Responsiveness

- **60fps GPU Acceleration**: All animated elements leverage `transform` and `opacity` to avoid costly layout reflows and paint cycles.
- **Progressive Enhancement**: If WebGL is unavailable or fails, `VibraniumCore3D` automatically switches to an optimized SVG/CSS vector representation.
- **Touch-Friendly & Mobile-First**:
  - The custom cursor is automatically disabled on devices without `pointer: fine`.
  - 3D hover tilts and mouse-position listeners are decoupled on coarse pointers.
  - Breakpoints tuned across: `640px` (mobile landscape), `768px` (tablets), `1024px` (laptops), and `1280px+` (desktops).
- **Reduced Motion**: Full compliance with `@media (prefers-reduced-motion: reduce)`. Animations are instantly bypassed to ensure a comfortable experience for sensitive users.

---

## 9. Accessibility (a11y)

- **Semantic HTML5 Structure**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Keyboard Navigation**: Full tab ordering, visible high-contrast focus rings (`:focus-visible`), Esc key handlers for all modals and the intro loader.
- **ARIA Standards**: `role="dialog"`, `aria-modal="true"`, `aria-expanded`, `aria-controls`, and `role="region"` for accordion elements.
- **Contrast Ratios**: Verified off-white `#F4F4F0` and emerald `#19E68C` against deep obsidian `#050505` to exceed WCAG 2.1 AA standards.

---

## 10. Credits & Attribution

- **Organized By**: GeeksForGeeks Student Chapter, Bennett University
- **Campus**: Plot Nos 8-11, TechZone II, Greater Noida, Uttar Pradesh 201310
- **Theme**: Marvel × Web Design Convergence
- **Submission**: Junior Core Technical Team Round 1
