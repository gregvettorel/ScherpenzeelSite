import heroImg from "../assets/respireipadmockup.png";
import flowchartImg from "../assets/flowchart.png";
import blenderVideo from "../assets/respire.mp4";
import desktopVideo from "../assets/desktop.mp4";

// NEW: Brains Coffee assets
import bcLaptop from "../assets/brainscoffeelaptop.png";
import bcIpad from "../assets/brainscoffeeipad.png";
import bcIpad2 from "../assets/brinscoffeeipad2.png";
import bcBrandboard from "../assets/brandingbrainscofeee.png";
import bcVideo from "../assets/brainscoffeevideo.mp4";

// NEW: Swear assets
import swearHero from "../assets/swear-1.png";
import swearShot2 from "../assets/swear-2.png";
import swearShot3 from "../assets/swear-3.png";
import swearVideo from "../assets/swearvideo.mp4";

export const cases = {
  // NEW CASE: Brains Coffee
  brainscoffee: {
    slug: "brainscoffee",
    title: "Brains Coffee",
    subtitle: "Concept coffee store — branding, website and packaging",
    hero: bcLaptop,
    figmaUrl: "https://www.figma.com/design/VkbA514SVDRTELkhxtHT2e/Brains-coffee?node-id=0-1&t=NNY9nmc999mxsM7j-1",
    explainer: `Brains Coffee is a concept coffee store designed in Figma. I created the brand identity, a responsive marketing website and packaging. The focus is a warm, modern identity, clear product storytelling, and consistency across web and packaging.`,
    year: "2025",
    deliverables: [
      "Branding & identity",
      "Marketing website (UI/UX)",
      "Packaging design",
      "Design system & components",
    ],
    stackTags: ["Figma", "Illustrator", "UI/UX", "Prototype"],
    features: [
      "Friendly, modern identity",
      "Responsive web design",
      "Reusable UI kit",
      "Consistent packaging system",
    ],
    cards: [
      { type: "video", src: bcVideo },
      { type: "image", src: bcLaptop },
      { type: "image", src: bcIpad },
      { type: "image", src: bcBrandboard },
      { type: "image", src: bcIpad2 },
    ],
    i18n: {
      en: {
        title: "Brains Coffee",
        subtitle: "Concept coffee store — branding, website and packaging",
        explainer:
          "Brains Coffee is a concept coffee store designed in Figma. I created the brand identity, a responsive marketing website and packaging. The focus is a warm, modern identity, clear product storytelling, and consistency across web and packaging.",
        deliverables: [
          "Branding & identity",
          "Marketing website (UI/UX)",
          "Packaging design",
          "Design system & components",
        ],
        features: [
          "Friendly, modern identity",
          "Responsive web design",
          "Reusable UI kit",
          "Consistent packaging system",
        ],
      },
      nl: {
        title: "Brains Coffee",
        subtitle: "Concept koffiewinkel — branding, website en verpakking",
        explainer:
          "Brains Coffee is een concept‑koffiewinkel ontworpen in Figma. We maakten de merkidentiteit, een responsieve marketingwebsite en verpakkingen. Focus: een warme moderne stijl, duidelijke productverhalen en consistentie tussen web en verpakking.",
        deliverables: [
          "Branding & identiteit",
          "Marketingwebsite (UI/UX)",
          "Verpakkingsontwerp",
          "Designsysteem & componenten",
        ],
        features: [
          "Vriendelijke, moderne identiteit",
          "Responsive webdesign",
          "Hergebruikbare UI‑kit",
          "Consistent verpakkingssysteem",
        ],
      },
      fr: {
        title: "Brains Coffee",
        subtitle: "Boutique concept — branding, site web et packagings",
        explainer:
          "Brains Coffee est une boutique concept imaginée dans Figma. Nous avons créé l’identité de marque, un site marketing responsive et des packagings. Objectif : une identité chaleureuse et moderne, un récit produit clair et une cohérence web/packaging.",
        deliverables: [
          "Branding & identité",
          "Site marketing (UI/UX)",
          "Design packaging",
          "Design system & composants",
        ],
        features: [
          "Identité chaleureuse et moderne",
          "Web design responsive",
          "Kit UI réutilisable",
          "Système de packaging cohérent",
        ],
      },
    },
    nextHref: "/work/respire",
  },

  respire: {
    slug: "respire",
    title: "Respire: Branding & Landing Page",
    subtitle: "Brand identity and conversion‑focused landing page for a marketplace app",
    hero: heroImg,
    explainer: `For Respire, we created a warm, fashion‑forward brand and a landing page that clearly explains the concept and drives sign‑ups. The page focuses on the value prop, social proof and clean visuals — built to be fast, responsive and easy to expand.`,
    figmaUrl: "https://www.figma.com/design/T3oxiZitmf2KdoAEfKaHhm/Respire?node-id=1-113",
    year: "2025",
    deliverables: [
      "Branding & logo",
      "Landing page (UI/UX)",
      "Design system & components",
      "Copy guidance",
      "Figma file",
    ],
    stackTags: ["Figma", "Branding", "UI/UX", "Web"],
    features: [
      "Clear value proposition",
      "Hero visuals and storytelling",
      "Trust and feature sections",
      "Responsive and fast",
      "SEO‑ready structure",
    ],
    cards: [
      { type: "video", src: blenderVideo },
      { type: "video", src: desktopVideo },
      { type: "image", src: heroImg },
      { type: "image", src: flowchartImg },
    ],
    i18n: {
      en: {
        title: "Respire: Branding & Landing Page",
        subtitle: "Brand identity and landing page for a marketplace app",
        explainer:
          "We designed Respire’s brand and a fast, conversion‑focused landing page that explains the concept clearly and drives sign‑ups.",
        deliverables: [
          "Branding & logo",
          "Landing page (UI/UX)",
          "Design system & components",
          "Copy guidance",
          "Figma file",
        ],
        features: [
          "Clear value proposition",
          "Hero visuals and storytelling",
          "Trust and feature sections",
          "Responsive and fast",
          "SEO‑ready structure",
        ],
      },
      nl: {
        title: "Respire: Branding & landingspagina",
        subtitle: "Branding en landingspagina voor een marketplace‑app",
        explainer:
          "We bouwden een herkenbare stijl en een snelle landingspagina die het concept helder maakt en aanzet tot inschrijving.",
        deliverables: [
          "Branding & logo",
          "Landingspagina (UI/UX)",
          "Designsysteem & componenten",
          "Copy‑advies",
          "Figma‑bestand",
        ],
        features: [
          "Heldere value proposition",
          "Sterke hero‑visuals en verhaal",
          "Trust‑ en featuresecties",
          "Snel en responsief",
          "SEO‑vriendelijke structuur",
        ],
      },
      fr: {
        title: "Respire : branding & landing page",
        subtitle: "Identité de marque et landing page pour une app marketplace",
        explainer:
          "Nous avons conçu l’identité de Respire et une landing page rapide orientée conversion pour expliquer clairement le concept et générer des inscriptions.",
        deliverables: [
          "Branding & logo",
          "Landing page (UI/UX)",
          "Design system & composants",
          "Conseil rédactionnel",
          "Fichier Figma",
        ],
        features: [
          "Proposition de valeur claire",
          "Visuels hero et storytelling",
          "Sections confiance et fonctionnalités",
          "Rapide et responsive",
          "Structure prête pour le SEO",
        ],
      },
    },
    nextHref: "/work/swear",
  },

  // NEW CASE: Swear
  swear: {
    slug: "swear",
    title: "Swear: 3D Sneaker Store",
    subtitle: "Interactive 3D sneaker configurator",
    hero: swearHero,
    explainer: `SWEAR is a 3D sneaker store built with Three.js and Vue.js, created for Swear London. Users can explore, customize, and order sneakers in real time, all within an immersive web experience. The project focuses on smooth 3D visuals, fast performance, and seamless integration between frontend and backend.`,
    // New: multiple CTAs (CasePage supports this below)
    ctas: [
      { label: "Code", href: "https://github.com/kweozz/three.js-sneaker-store" },
      { label: "Live Website", href: "https://three-js-sneaker-store.vercel.app/" },
      { label: "Swear London", href: "https://www.swear-london.com/" }
    ],
    year: "2025",
    deliverables: [
      "3D Sneaker Store",
      "Customizer & Configurator",
      "E-commerce Integration",
      "Responsive Web App",
      "Documentation",
    ],
    stackTags: ["Three.js", "Vue.js", "JavaScript", "Node.js", "Vercel"],
    features: [
      "Real-time 3D product viewer",
      "Sneaker customization",
      "Smooth transitions & animations",
      "Real-time ordering system",
      "Backend integration",
      "Mobile-friendly UI",
      "Fast performance",
      "E-commerce ready",
    ],
    cards: [
      { type: "video", src: swearVideo },
      { type: "image", src: swearHero },
      { type: "image", src: swearShot3 },
      { type: "image", src: swearShot2 },
    ],
    i18n: {
      en: {
        title: "Swear: 3D Sneaker Store",
        subtitle: "Interactive 3D sneaker configurator",
        explainer:
          "SWEAR is a 3D sneaker store built with Three.js and Vue.js. Users explore, customize and order sneakers in real time, with smooth visuals and fast performance.",
        deliverables: [
          "3D Sneaker Store",
          "Customizer & Configurator",
          "E‑commerce Integration",
          "Responsive Web App",
          "Documentation",
        ],
        features: [
          "Real‑time 3D viewer",
          "Sneaker customization",
          "Smooth transitions & animations",
          "Real‑time ordering system",
          "Backend integration",
          "Mobile‑friendly UI",
          "Fast performance",
          "E‑commerce ready",
        ],
      },
      nl: {
        title: "Swear: 3D Sneaker Store",
        subtitle: "Interactieve 3D‑sneakerconfigurator",
        explainer:
          "SWEAR is een 3D‑sneakerwinkel met Three.js en Vue.js. Bezoekers verkennen, personaliseren en bestellen sneakers realtime, met vloeiende visuals en hoge performance.",
        deliverables: [
          "3D‑sneakerstore",
          "Customizer & configurator",
          "E‑commerce‑integratie",
          "Responsieve webapp",
          "Documentatie",
        ],
        features: [
          "Realtime 3D‑viewer",
          "Sneaker‑customization",
          "Vloeiende transities & animaties",
          "Realtime bestelsysteem",
          "Backend‑integratie",
          "Mobielvriendelijke UI",
          "Hoge performance",
          "Klaar voor e‑commerce",
        ],
      },
      fr: {
        title: "Swear : boutique de baskets 3D",
        subtitle: "Configurateur 3D interactif pour baskets",
        explainer:
          "SWEAR est une boutique 3D construite avec Three.js et Vue.js. Les utilisateurs explorent, personnalisent et commandent en temps réel, avec des visuels fluides et des performances rapides.",
        deliverables: [
          "Boutique 3D",
          "Personnalisation & configurateur",
          "Intégration e‑commerce",
          "Application web responsive",
          "Documentation",
        ],
        features: [
          "Visionneuse 3D en temps réel",
          "Personnalisation des baskets",
          "Transitions & animations fluides",
          "Système de commande temps réel",
          "Intégration backend",
          "UI adaptée au mobile",
          "Haute performance",
          "Prêt pour l’e‑commerce",
        ],
      },
    },
    nextHref: "/work/respire",
  },
};