# VIBRANIUM VAULT
### GeeksForGeeks Student Chapter — Bennett University
> **Technology • Innovation • Intelligence • Experience**  
> *Junior Core Technical Team Round 1 Submission*

---

## 1. Executive Concept & Vision

**VIBRANIUM VAULT** is a premier, cinematic, interactive digital symposium and 36-hour hackathon portal created for the **GeeksForGeeks Student Chapter, Bennett University**.

The experience reimagines the traditional hackathon website as a classified, high-tech digital vault housing advanced technology, knowledge, and competitive challenges. Rather than relying on generic website templates or unlicensed movie stills, the experience embodies a tailored **Awwwards × Godly × Land-book** caliber interface that bridges **Minimalist + Editorial + Swiss Design** with an atmospheric **Dark Marvel Aesthetic (Mystic Green & Violet)**.

### Thematic Marvel Inspirations & Visual Language:
- **Doctor Strange**: Dimensional sacred geometry, rotating mystical energy portals, and arcane ring coordinates.
- **Iron Man**: Holographic HUD diagnostics, titanium chassis aesthetics, and telemetric pulse indicators.
- **Captain America**: Tactical Swiss mission dossiers, structured timelines, and kinetic star shields.
- **Thor**: Controlled electrical discharges, energetic lightning pulses, and atmospheric power.
- **Doctor Doom**: Intimidating metallic armor, dark emerald energy, and subtle smoking exhaust vents.
- **Loki**: Elegant illusion particles, green runic aura, and flowing celestial curves.

---

## 2. Event Overview & Centralized Configuration

All event information, dates, venues, tracks, luminaries, and FAQs are decoupled from UI components and stored in a single configuration file: [`src/data/eventData.js`](file:///c:/Users/user/Desktop/geeks%20for%20geek/src/data/eventData.js).

| Parameter | Configuration / Specification |
| :--- | :--- |
| **Event Name** | VIBRANIUM VAULT 2026 |
| **Organizer** | GeeksForGeeks Student Chapter, Bennett University |
| **Dates** | October 24–25, 2026 (36 Hours Non-Stop) |
| **Time** | 09:00 AM IST – 09:00 PM IST |
| **Venue** | Auditorium 1 & Core Tech Labs, Bennett University, Greater Noida |
| **Coordinates** | 28.4509° N, 77.5842° E (Delhi-NCR) |
| **Registration** | 100% Free Entry // Enlistment Open |
| **Bounty Pool** | ₹5,00,000+ in Cash Grants, VC Backing & Hardware Perks |
| **Security Clearance** | `CLASSIFIED // LEVEL-07` |

---

## 3. Design System & Visual Identity

### 3.1 Color Atmosphere (Mystic Green + Violet)
Emerald and violet are deployed as **controlled lighting and atmospheric accents**, not as overwhelming neon blocks:
- **Obsidian & Deep Canvas**: `#050505`, `#080A0C`, `#0D1110`
- **Mystic Emerald Green**: `#19E68C` (Lighting: `rgba(25, 230, 140, 0.35)`)
- **Mystical Violet**: `#8B5CF6` (Lighting: `rgba(139, 92, 246, 0.35)`)
- **Kinetic Spark Accent**: `#FF8A3D` (Subtle energy discharge)
- **Cyan Resonance**: `#38BDF8` (Tactical telemetry)
- **Editorial Typography**: `#F4F4F0` (High contrast off-white)
- **Telemetry Muted Gray**: `#8A8F98` (Secondary annotations)

### 3.2 Typography Hierarchy
- **Display & Kinetic Headings**: `Space Grotesk` (Google Fonts) — high-impact uppercase kinetic typography.
- **Brand & Accents**: `Syne` (Google Fonts) — avant-garde geometric elegance.
- **Body & UI**: `Inter` (Google Fonts) — maximum readability across all screen resolutions.
- **Telemetry & HUD**: `JetBrains Mono` (Google Fonts) — cryptographic coordinate readouts.

---

## 4. Five Character Action Collectibles & Motion Identity

In compliance with event visual identity guidelines, five original, dimensional vector "character action collectibles" are strategically placed across the experience to represent core Marvel lore without cluttering the viewport:

| Character | Strategic Section | Motion & Energy Identity | Visual Geometry |
| :--- | :--- | :--- | :--- |
| **THOR** | `HeroSection` | Lightning pulses, Mjolnir sparks, electric flickers | Segmented lightning polygon, orbiting spark points |
| **LOKI** | `AboutSection` | Emerald aura, illusion particles, floating arc | Horned circlet curves, concentric runic core |
| **DOCTOR STRANGE** | `TracksSection` | Counter-rotating portals, orange & violet sparks | Dual concentric dash rings, sacred triangles |
| **CAPTAIN AMERICA** | `TimelineSection` | Concentric shield rotation, kinetic dash trails | Titanium ballistic rings, center star glyph |
| **DOCTOR DOOM** | `SpeakersSection` | Intimidating hood, glowing emerald eyes, smoke | Armored hood silhouette, smoke particulate drift |

All emblems feature responsive scaling, non-intrusive z-indexing, pointer-events disabling, and automated motion suppression under `prefers-reduced-motion`.

---

## 5. Global Motion System (GSAP + ScrollTrigger)

The motion architecture follows a 3-tier hierarchy that keeps the website alive while preserving content readability:

- **Level 1 — Micro-Interactions**:
  - Magnetic pull physics (`useMagnetic.js`) on registration CTA buttons and social links.
  - Dynamic cursor tracking (`--mouse-x`, `--mouse-y`) border glows and 3D card tilt.
  - Interactive plus/minus accordions and active navigation pill sweeps.
- **Level 2 — Section Reveal Animations**:
  - Progressive "vault unlock" reveal sequence (`useScrollReveal.js`) with staggered typography (`data-reveal`, `data-reveal-group`).
  - Scroll-scrubbed timeline progress axis illumination.
  - Hulk-inspired impact numerical counters with cubic spring easing.
- **Level 3 — Cinematic Moments**:
  - Vault initialization sequence: `01 SYSTEM INITIALIZING` ➔ `02 ENERGY CORE ONLINE` ➔ `03 VAULT UNLOCKED`.
  - 3D Vibranium Core with Three.js WebGL counter-rotating rings and orbiting particles.
  - 3D Holographic Vault Pass synthesizer with iridescent foil reflection and celebratory confetti burst.

---

## 6. Multi-Interface & Cross-Device Compatibility

The platform is engineered to deliver an experience tailored to every interface:

### 6.1 Desktop Interface (High-Precision Pointers)
- Custom dual-layer cursor with smooth lerp physics and contextual hover expansions (`ACCESS`, `EXPLORE`, `VIEW`).
- Full 3D perspective mouse parallax tilt across Hero, Highlights, Tracks, and Luminary cards.
- Web Audio API synthesizer generating an ethereal ambient drone and tactical feedback clicks.

### 6.2 Mobile & Touch Interface (Smartphones & Handhelds)
- **Clean Cursor Suppression**: Custom cursor is disabled automatically on coarse pointers (`pointer: coarse`).
- **Responsive Layout Recomposition**: Side-by-side grids gracefully stack into single-column editorial cards with 44px+ touch targets.
- **Action Emblem Optimization**: Decorative character emblems scale down to 90px with reduced opacity and zero content overlap.
- **Zero Horizontal Overflow**: All section containers enforce strict overflow bounds (`overflow: hidden`) preventing horizontal sway.
- **Mobile Navigation Drawer**: Accessible slide-out navigation with focus-locking, backdrop blur, and quick-enlist button.

### 6.3 Tablet & Foldable Interface (640px – 1024px)
- Adaptive 2-column masonry grids for the Asymmetric Gallery and Tracks sections.
- Touch-friendly day tabs and interactive timeline expanders.

### 6.4 Low-Power & Reduced-Motion Interface
- Respects `prefers-reduced-motion: reduce`: instantly bypasses GSAP translate/parallax animations and presents fully rendered static layouts.
- **Graceful WebGL Fallback**: If WebGL is unavailable or fails, `VibraniumCore3D` automatically switches to a lightweight SVG/CSS vector representation without crashing.

---

## 7. Project Architecture

```
geeks-for-geek/
├── .gitignore                     # Comprehensive build, env, OS & IDE ignore rules
├── index.html                     # Semantic SEO metadata, Google Fonts, SVG filters
├── package.json                   # Dependencies & build scripts
├── vite.config.js                 # Vite bundler configuration
├── README.md                      # Complete system documentation
├── public/
│   ├── favicon.svg                # Vibranium Core SVG glyph
│   └── images/                    # High-definition event & speaker photography
│       ├── gallery-1.jpg          # Night hackathon coding sprint
│       ├── gallery-2.jpg          # Keynote stage presentation
│       ├── gallery-3.jpg          # Grand prize podium celebration
│       ├── gallery-4.jpg          # Collaborative architecture workshop
│       ├── speaker-1.jpg          # AI Research Scientist
│       ├── speaker-2.jpg          # Distributed Systems Architect
│       ├── speaker-3.jpg          # Cryptographic Security Lead
│       └── speaker-4.jpg          # Creative Technologist
└── src/
    ├── main.jsx                   # React 19 application root
    ├── App.jsx                    # Core page orchestrator & modal state coordinator
    ├── index.css                  # Global design tokens aggregator
    ├── animations/
    │   └── scrollReveal.js        # GSAP + ScrollTrigger vault-unlock reveal controller
    ├── components/
    │   ├── CharacterEmblems.jsx   # 5 Marvel character energy sigils (Thor, Doom, Loki, Cap, Strange)
    │   ├── CustomCursor.jsx       # Smooth desktop lerp cursor & spotlight
    │   ├── Navbar.jsx             # Sticky glassmorphism nav with audio toggle & mobile drawer
    │   ├── RegistrationModal.jsx  # Accessible registration dialog with validation & success state
    │   ├── SocialIcons.jsx        # Hand-crafted SVG social icons (GitHub, LinkedIn, Twitter, etc.)
    │   ├── TicketPassGenerator.jsx# 3D holographic digital pass synthesizer with confetti
    │   ├── VaultLoader.jsx        # Short classified initialization intro sequence
    │   └── VibraniumCore3D.jsx    # Three.js dimensional WebGL core & SVG fallback
    ├── data/
    │   └── eventData.js           # Central event configuration, tracks, timeline & FAQs
    ├── hooks/
    │   ├── useMagnetic.js         # Magnetic cursor attraction hook
    │   ├── useModalA11y.js        # Accessible modal focus trap, ESC handler & scroll lock
    │   └── useSoundFX.js          # Web Audio API ambient drone & click synthesizer
    ├── sections/
    │   ├── HeroSection.jsx        # Kinetic typography, countdown timer & 3D Vibranium Core
    │   ├── AboutSection.jsx       # Manifesto, GFG BU chapter background & Loki sigil
    │   ├── HighlightsSection.jsx  # 4 tactile 3D cards & Hulk impact metrics
    │   ├── TracksSection.jsx      # 4 curated hackathon competition arenas & Strange sigil
    │   ├── TimelineSection.jsx    # Swiss tactical dossier, Cap sigil & .ics calendar export
    │   ├── SpeakersSection.jsx    # Keynote luminaries, Doom sigil & dossier modal
    │   ├── GallerySection.jsx     # Asymmetric masonry & fullscreen lightbox modal
    │   ├── RegistrationSection.jsx# Climax CTA & 3D holographic pass generator
    │   ├── FAQSection.jsx         # Morphing accordion with live search filter
    │   └── FooterSection.jsx      # Infinite kinetic marquee & magnetic social links
    └── styles/
        ├── main.css               # Design tokens, Swiss grid, base layout & HUD
        ├── sections.css           # Component layouts, cards, modals & timelines
        └── effects.css            # Character emblems, animations, 3D foil & glows
```

---

## 8. Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **3D Graphics**: Three.js WebGL (concentric Torus rings, polyhedral crystal, orbiting sparks)
- **Animation Engine**: GSAP 3 + ScrollTrigger
- **Iconography**: Lucide React + Hand-crafted SVG Brand Icons
- **Celebration Effects**: Canvas Confetti
- **Audio Synthesizer**: Native Web Audio API (Synthesized oscillators, zero external MP3 assets)
- **Styling Architecture**: Modern Vanilla CSS3 (Custom properties, CSS Grid, Flexbox, Backdrop Filter, 3D Transforms, SVG Filters)
- **Code Quality**: Oxlint (0 errors, 0 warnings)

---

## 9. Local Development & Build

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Setup & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 10. Quality Assurance & Verification

The codebase has undergone full verification:

- [x] **0 Oxlint Errors / 0 Warnings**: Fully validated across all 26 source files.
- [x] **Production Build Success**: `npm run build` generates optimized chunks cleanly.
- [x] **Cross-Interface Usability**: Desktop, tablet, mobile (320px–1536px+) and touch devices verified.
- [x] **No Horizontal Overflow**: Contained viewport bounds on mobile and small viewports.
- [x] **Marvel Lore Integrity**: 5 strategic character action emblems integrated without visual clutter.
- [x] **Full Accessibility**: Keyboard focus trap, ESC closing, ARIA labels, and `prefers-reduced-motion`.
- [x] **Interactive Features**: 3D card tilt, holographic pass synthesizer, live FAQ search, calendar `.ics` download, and Web Audio API ambient toggle.

---

## 11. Credits & Ownership

- **Event**: VIBRANIUM VAULT 2026
- **Organized By**: GeeksForGeeks Student Chapter, Bennett University
- **Campus**: Plot Nos 8-11, TechZone II, Greater Noida, Uttar Pradesh 201310
- **Submission**: Junior Core Technical Team Round 1
