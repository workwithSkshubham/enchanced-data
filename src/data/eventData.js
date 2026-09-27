/**
 * VIBRANIUM VAULT — Central Event Configuration & Content
 * All event metadata, dates, tracks, speakers, timeline, and FAQs can be
 * easily edited from this single file without touching UI components.
 */

export const EVENT_DATA = {
  name: "VIBRANIUM VAULT",
  tagline: "Technology • Innovation • Intelligence • Experience",
  headline: "ENTER THE NEXT GENERATION OF DIGITAL CREATIVITY.",
  subheadline:
    "A premier Marvel-inspired technology symposium & 36-hour hackathon where code, dimensional innovation, and creative intelligence converge.",
  
  organizer: {
    name: "GeeksForGeeks Student Chapter",
    institution: "Bennett University",
    chapterId: "GFG-BU-VAULT-2026",
    campus: "Greater Noida, Delhi-NCR, India",
    coordinates: "28.4509° N, 77.5842° E",
    securityClearance: "CLASSIFIED // LEVEL-07",
    status: "VAULT PROTOCOL ACTIVE",
  },

  // Editable event placeholders (clearly marked)
  details: {
    date: "OCTOBER 24–25, 2026",
    datePlaceholder: "[EVENT DATE: OCT 24-25, 2026]",
    time: "09:00 AM IST – 09:00 PM IST (36 HRS)",
    timePlaceholder: "[EVENT TIME: 09:00 AM IST]",
    venue: "Auditorium 1 & Core Tech Labs, Bennett University",
    venuePlaceholder: "[VENUE: BENNETT UNIVERSITY, AUDI 1]",
    targetDate: "2026-10-24T09:00:00+05:30",
    registrationLink: "https://vibraniumvault.geeksforgeeksbu.tech/register",
    registrationPlaceholder: "[REGISTRATION LINK: REGISTRATION OPEN]",
    mode: "In-Person & Hybrid Sync",
    eligibility: "Open to all College Students, Developers & Designers nationwide",
    fee: "Free Entry (Selection via Dossier / Project Abstract)",
  },

  stats: [
    { label: "Prize Pool", value: 500000, prefix: "₹", suffix: "+", caption: "Cash grants, bounties & hardware credits" },
    { label: "Active Hackers", value: 1200, prefix: "", suffix: "+", caption: "Engineers, designers & innovators" },
    { label: "Continuous Hacking", value: 36, prefix: "", suffix: " HRS", caption: "Zero-latency building sprint" },
    { label: "Industry Mentors", value: 24, prefix: "", suffix: "+", caption: "FAANG & top startup founders" },
  ],

  highlights: [
    {
      id: "01",
      title: "BUILD",
      subtitle: "The Forge Dimension",
      description: "Engineer high-throughput systems, generative interfaces, or cryptographic mechanisms with zero artificial constraints.",
      codeSnippet: "fn forge_reality() -> Result<Artifact, Error>",
      tag: "CORE_COMPUTATION",
    },
    {
      id: "02",
      title: "CREATE",
      subtitle: "Spatial UI & Motion",
      description: "Blend Swiss precision and kinetic physics to craft digital experiences that shatter ordinary web conventions.",
      codeSnippet: "const vault = new SpatialMatrix({ depth: 4D })",
      tag: "CREATIVE_TECHNOLOGY",
    },
    {
      id: "03",
      title: "COMPETE",
      subtitle: "The Crucible Sprint",
      description: "Battle through high-stakes algorithmic challenges, CTF arenas, and 36-hour cross-disciplinary track milestones.",
      codeSnippet: "priority_queue<Innovation> rank_leaderboard",
      tag: "ALGORITHMIC_WARFARE",
    },
    {
      id: "04",
      title: "CONNECT",
      subtitle: "Vibranium Network",
      description: "Engage directly with venture scouts, engineering directors, and the brightest peer cohort in the Delhi-NCR circuit.",
      codeSnippet: "await network.handshake(Peer::BennettUniv)",
      tag: "GLOBAL_SYNDICATE",
    },
  ],

  tracks: [
    {
      id: "neural-matrices",
      title: "Neural Matrices",
      category: "ARTIFICIAL INTELLIGENCE & ML",
      accent: "#19E68C",
      description:
        "Architect autonomous agent swarms, multimodal vision transformers, neural graphics pipelines, or localized low-latency LLM runtimes.",
      topics: ["Autonomous Agents", "Diffusion & NeRFs", "Edge AI Runtimes", "Neural Code Synthesis"],
      challengeTeaser: "Develop self-correcting multi-agent systems operating under sub-100ms inference ceilings.",
    },
    {
      id: "cryptographic-vaults",
      title: "Cryptographic Vaults",
      category: "WEB3, ZERO-KNOWLEDGE & SECURITY",
      accent: "#8B5CF6",
      description:
        "Engineer decentralized privacy systems, zero-knowledge proofs, resilient smart contract protocols, or post-quantum cryptographic vaults.",
      topics: ["zk-SNARKs & Rollups", "Account Abstraction", "Cross-Chain Bridges", "MEV Resistance"],
      challengeTeaser: "Build non-custodial decentralized vaults with verifiable proof-of-solvency and MPC authorization.",
    },
    {
      id: "quantum-systems",
      title: "Core & Distributed Systems",
      category: "LOW-LEVEL, KERNEL & INFRA",
      accent: "#38BDF8",
      description:
        "Push memory-safety and concurrency to the perimeter: high-performance Rust kernels, WASM runtimes, or resilient distributed ledgers.",
      topics: ["Rust & WASM Engines", "Distributed Consensus", "eBPF Observability", "MicroVM Isolation"],
      challengeTeaser: "Construct an asynchronous fault-tolerant event broker achieving over 2M ops/second.",
    },
    {
      id: "spatial-interfaces",
      title: "Kinetic & Spatial Web",
      category: "CREATIVE ENGINEERING & UI/UX",
      accent: "#FF8A3D",
      description:
        "Transcend rectangular screens: WebGL spatial computing, procedural audio synthesizers, and experimental micro-interactions.",
      topics: ["WebGL / Three.js Shaders", "Web Audio API", "Swiss Typography Grids", "Spatial Physics Engines"],
      challengeTeaser: "Design an interactive holographic operating system interface with 60fps gesture kinematics.",
    },
  ],

  timeline: {
    day1: [
      {
        phase: "01",
        time: "08:30 AM",
        title: "Vault Access & Identity Handshake",
        location: "Main Foyer, Bennett University",
        description: "Registration check-in, NFC badge distribution, security dossier issuance, and welcome breakfast.",
        tag: "LOGISTICS",
      },
      {
        phase: "02",
        time: "10:00 AM",
        title: "Keynote: Decoding Silicon & Mysticism",
        location: "Auditorium 1",
        description: "Opening ceremonial address by GFG Bennett University Core Team & guest engineering luminaries.",
        tag: "CEREMONY",
      },
      {
        phase: "03",
        time: "11:30 AM",
        title: "The Crucible: Hacking Commences",
        location: "Tech Labs Alpha & Beta",
        description: "Problem statements officially unsealed. 36-hour sprint countdown begins across all 4 tracks.",
        tag: "HACKATHON",
      },
      {
        phase: "04",
        time: "04:30 PM",
        title: "Mentor Dimension Round 1",
        location: "Collaborative Arenas",
        description: "One-on-one architecture reviews, tech stack validation, and debugging assistance from industry veterans.",
        tag: "MENTORSHIP",
      },
      {
        phase: "05",
        time: "11:00 PM",
        title: "Midnight Algorithmic Speedrun & Energy Surge",
        location: "Hacker Lounge",
        description: "Competitive programming lightning blitz, midnight pizza feast, and ambient synthwave DJ set.",
        tag: "LIGHTNING_SPRINT",
      },
    ],
    day2: [
      {
        phase: "06",
        time: "08:00 AM",
        title: "Dawn Sync & Prototype Polish",
        location: "Tech Labs Alpha & Beta",
        description: "Breakfast served, final code commits, demo environment configurations, and pitch rehearsals.",
        tag: "SPRINT",
      },
      {
        phase: "07",
        time: "12:00 PM",
        title: "Code Freeze & Dossier Submission",
        location: "Central Portal",
        description: "Hard stop on GitHub repository commits. Final video demos and architecture docs submitted to jury.",
        tag: "MILESTONE",
      },
      {
        phase: "08",
        time: "02:00 PM",
        title: "The Grand Exhibition & Jury Evaluations",
        location: "Auditorium Foyer & Expo Floor",
        description: "Top 20 shortlisted teams pitch live before angel investors, venture leads, and academic heads.",
        tag: "JURY_PITCH",
      },
      {
        phase: "09",
        time: "06:00 PM",
        title: "Victory Ceremony & Vault Sealing",
        location: "Auditorium 1",
        description: "Announcement of ₹5,00,000+ in grand prizes, track bounties, internship offers, and concluding address.",
        tag: "FINALE",
      },
    ],
  },

  speakers: [
    {
      id: "spk-1",
      name: "Dr. Elena Rostova",
      role: "Principal AI Scientist",
      org: "Neural Horizons Labs",
      bio: "Pioneering research in sparse attention transformer architectures and autonomous reasoning pipelines. Author of 14 international publications.",
      track: "NEURAL MATRICES",
      image: "/images/speaker-1.jpg",
      topic: "From Shaders to Sentience: The Next Decade of Autonomous Multimodal Runtimes",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: "spk-2",
      name: "Kabir Sen",
      role: "VP of Distributed Infrastructure",
      org: "Vesper Systems & Ex-FAANG",
      bio: "Built distributed ledger consensus engines processing 50k+ TPS. Specializes in Rust micro-architectures, memory-safe kernels, and eBPF systems.",
      track: "QUANTUM SYSTEMS",
      image: "/images/speaker-2.jpg",
      topic: "Zero-Allocation Engineering: Designing Low-Latency Systems Under Brutal Constraints",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: "spk-3",
      name: "Marcus Chen",
      role: "Head of Cryptographic Security",
      org: "CipherGrid Research",
      bio: "Zero-knowledge proof developer and ethical white-hat researcher. Advises top security DAOs and protocol treasuries on post-quantum resilience.",
      track: "CRYPTOGRAPHIC VAULTS",
      image: "/images/speaker-3.jpg",
      topic: "Zero-Knowledge Protocols: Constructing Unbreakable Vaults in an Untrusted Universe",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: "spk-4",
      name: "Aanya Verma",
      role: "Director of Creative Technology",
      org: "Dimensional Motion Studio",
      bio: "Award-winning creative developer pushing browser limits with WebGPU, GLSL procedural shaders, and kinetic editorial Swiss typography systems.",
      track: "KINETIC WEB",
      image: "/images/speaker-4.jpg",
      topic: "Beyond the Screen: Spatial Physics, Shaders, and the New Era of Editorial Web",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Night of the 36-Hour Forge",
      category: "HACKATHON SPRINTS",
      caption: "Developers collaborating through midnight at Bennett University's state-of-the-art tech arena.",
      image: "/images/gallery-1.jpg",
      aspect: "wide",
    },
    {
      id: "gal-2",
      title: "Keynote Dimension // Auditorium 1",
      category: "KEYNOTE & SYMPOSIUM",
      caption: "Over 800 students attending the opening architectural keynote on dimensional computing.",
      image: "/images/gallery-2.jpg",
      aspect: "wide",
    },
    {
      id: "gal-3",
      title: "The Grand Victory Moment",
      category: "PODIUM CELEBRATION",
      caption: "Winning builders crowned on stage with cash grants, trophies, and fellowship access.",
      image: "/images/gallery-3.jpg",
      aspect: "wide",
    },
    {
      id: "gal-4",
      title: "Collaborative Architecture Sessions",
      category: "MENTORSHIP & CODE REVIEWS",
      caption: "Intense whiteboard and code debugging with mentors from leading engineering firms.",
      image: "/images/gallery-4.jpg",
      aspect: "wide",
    },
  ],

  faqs: [
    {
      category: "General",
      q: "What is Vibranium Vault?",
      a: "Vibranium Vault is the premier flagship technology symposium and 36-hour hackathon organized by the GeeksForGeeks Student Chapter at Bennett University. Inspired by Marvel's technological universe and futuristic digital vaults, the event challenges students to craft groundbreaking software, AI models, cryptographic architectures, and kinetic digital interfaces.",
    },
    {
      category: "Participation",
      q: "Who can participate in the event?",
      a: "The event is open to undergraduate and postgraduate students from any recognized university, college, or institute across India. Enthusiasts in computer science, design, electronics, and product engineering are encouraged to participate.",
    },
    {
      category: "General",
      q: "Who is organizing Vibranium Vault?",
      a: "The entire event is conceived, organized, and hosted by the GeeksForGeeks Student Chapter, Bennett University (Greater Noida, Uttar Pradesh). The team consists of core student developers, technical leads, and creative designers backed by faculty mentorship.",
    },
    {
      category: "Logistics",
      q: "Where will the event take place and what are the arrangements?",
      a: "The event is hosted on-campus at Bennett University (Plot Nos 8-11, TechZone II, Greater Noida, UP). In-person attendees receive 24/7 access to high-speed fiber internet, hardware testing labs, mentor lounges, meals, midnight snacks, rest areas, and security.",
    },
    {
      category: "Registration",
      q: "Is registration free or is there an entry fee?",
      a: "Registration is 100% FREE. There are no fees to apply, participate, or compete. Teams are shortlisted based on their application dossier, project proposal, and past technical achievements.",
    },
    {
      category: "Participation",
      q: "What is the team size requirement?",
      a: "Teams can consist of 2 to 4 members. Inter-college teams and inter-disciplinary teams (developers + designers) are actively welcomed and encouraged.",
    },
    {
      category: "Logistics",
      q: "What should participants bring to the venue?",
      a: "Participants should bring their laptops, chargers, valid college student ID cards, any specific hardware or microcontrollers needed for their project, toiletries, and enthusiasm. We provide power strips, Wi-Fi, food, beverages, and sleeping zones.",
    },
    {
      category: "Participation",
      q: "Can beginners participate without prior hackathon experience?",
      a: "Absolutely! Vibranium Vault is designed with dedicated mentor office hours, introductory technical workshops, and starter kits to help first-time hackers transform ambitious ideas into working prototypes.",
    },
  ],

  socials: [
    { name: "Instagram", url: "https://instagram.com/gfg_bu", handle: "@gfg_bu" },
    { name: "LinkedIn", url: "https://linkedin.com/company/gfg-bennett-university", handle: "GFG Bennett Chapter" },
    { name: "GitHub", url: "https://github.com/gfg-bennett", handle: "github.com/gfg-bennett" },
    { name: "Discord", url: "https://discord.gg/vibraniumvault", handle: "Vibranium Community" },
    { name: "Twitter/X", url: "https://x.com/gfg_bu", handle: "@gfg_bu" },
  ],
};
