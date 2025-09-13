import heroImg from "../assets/respireipadmockup.png";
import flowchartImg from "../assets/flowchart.png";
import blenderVideo from "../assets/respire.mp4";
import desktopVideo from "../assets/desktop.mp4";

// NEW: Swear assets
import swearHero from "../assets/swear-1.png";
import swearShot2 from "../assets/swear-2.png";
import swearShot3 from "../assets/swear-3.png";
import swearVideo from "../assets/swearvideo.mp4";

export const cases = {
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
    nextHref: "/work/swear", // go to Swear next
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
    nextHref: "/work/respire",
  },
};