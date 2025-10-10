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
    title: "Respire: Marketplace App",
    subtitle: "A fresh take on second-hand shopping",
    hero: heroImg,
    explainer: `Respire is a platform designed to encourage the sharing and discovery of second-hand outfits, with a focus on style and community engagement. The platform distinguishes itself by allowing users to share their outfits and express their personal style without necessarily buying or selling items, making it more than just a marketplace.`,
    figmaUrl: "https://www.figma.com/design/T3oxiZitmf2KdoAEfKaHhm/Respire?node-id=1-113",
    year: "2025",
    deliverables: [
      "Branding & logo",
      "UI/UX Design",
      "Mobile App Prototype",
      "Figma File",
      "User Flows & Wireframes",
      "Website Development",
    ],
    stackTags: ["Figma", "UI/UX", "Prototyping", "Mobile", "Web"],
    features: [
      "Clean, modern UI",
      "Instant chat",
      "Secure payments",
      "Personalized recommendations",
      "Easy listing & search",
      "Community-driven marketplace",
    ],
    cards: [
      { type: "video", src: blenderVideo },
      { type: "video", src: desktopVideo },
      { type: "image", src: heroImg },
      { type: "image", src: flowchartImg },
    ],
    i18n: {
      en: {
        title: "Respire: Marketplace App",
        subtitle: "A fresh take on second-hand shopping",
        explainer:
          "Respire is a platform designed to encourage the sharing and discovery of second-hand outfits, with a focus on style and community engagement.",
        deliverables: [
          "Branding & logo",
          "UI/UX Design",
          "Mobile App Prototype",
          "Figma File",
          "User Flows & Wireframes",
          "Website Development",
        ],
        features: [
          "Clean, modern UI",
          "Instant chat",
          "Secure payments",
          "Personalized recommendations",
          "Easy listing & search",
          "Community-driven marketplace",
        ],
      },
      nl: {
        title: "Respire: Marketplace‑app",
        subtitle: "Een frisse kijk op tweedehands shoppen",
        explainer:
          "Respire is een platform om tweedehands outfits te delen en te ontdekken, met focus op stijl en community.",
        deliverables: [
          "Branding & logo",
          "UI/UX‑design",
          "Mobiele app‑prototype",
          "Figma‑bestand",
          "User flows & wireframes",
          "Website‑ontwikkeling",
        ],
        features: [
          "Strakke, moderne UI",
          "Directe chat",
          "Veilige betalingen",
          "Persoonlijke aanbevelingen",
          "Makkelijk plaatsen & zoeken",
          "Community‑gedreven marketplace",
        ],
      },
      fr: {
        title: "Respire : application marketplace",
        subtitle: "Un regard nouveau sur la seconde main",
        explainer:
          "Respire est une plateforme qui encourage le partage et la découverte de tenues de seconde main, avec un focus sur le style et la communauté.",
        deliverables: [
          "Branding & logo",
          "Design UI/UX",
          "Prototype d’app mobile",
          "Fichier Figma",
          "User flows & wireframes",
          "Développement du site",
        ],
        features: [
          "UI moderne et épurée",
          "Chat instantané",
          "Paiements sécurisés",
          "Recommandations personnalisées",
          "Publication & recherche faciles",
          "Marketplace orientée communauté",
        ],
      },
    },
    nextHref: "/work/swear",
  },

  // NEW CASE: Swear
  swear: {
    slug: "swear",
    title: "Swear: 3D Sneaker Store",
    subtitle: "Immersive e‑commerce experience with Three.js",
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
        subtitle: "Immersive e‑commerce experience with Three.js",
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
        subtitle: "Immersieve e‑commerce ervaring met Three.js",
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
        subtitle: "Expérience e‑commerce immersive avec Three.js",
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