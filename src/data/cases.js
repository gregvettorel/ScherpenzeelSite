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
  // --- Brains Coffee ---
  brainscoffee: {
    slug: "brainscoffee",
    title: "Brains Coffee",
    subtitle: "Concept coffee brand — branding, website and packaging",
    hero: bcLaptop,
    figmaUrl: "https://www.figma.com/design/VkbA514SVDRTELkhxtHT2e/Brains-coffee?node-id=0-1",
    explainer:
      "Brains Coffee is a concept brand we created entirely from scratch — from name and logo to packaging and website. A playful, fantasy-driven take on the idea that everyone wakes up a little like a zombie before their first coffee.",
    year: "2025",
    deliverables: [
      "Logo & branding",
      "AI-generated imagery & packaging design",
      "Web design in Figma",
      "Design system & style guide",
    ],
    stackTags: ["Figma", "Illustrator", "AI prompting", "UI/UX"],
    story: {
      challenge:
        "Build a coffee brand that’s more about character than caffeine. Something warm, recognizable, and professional — with just the right amount of humor.",
      approach:
        "We started with AI-generated visuals to define the atmosphere, then designed the logo and color palette in Illustrator. From there, we built wireframes and a responsive web design in Figma that tells the story visually: cozy, modern, and just a bit cheeky.",
    },
    results: [
      "A consistent visual identity across packaging and web",
      "A brand that feels alive, creative, and ready to grow",
      "Strong storytelling that connects instantly",
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
        subtitle: "Concept coffee brand — branding, website and packaging",
        explainer:
          "Brains Coffee is a concept brand we created entirely from scratch — from name and logo to packaging and website. A playful, fantasy-driven take on the idea that everyone wakes up a little like a zombie before their first coffee.",
        deliverables: [
          "Logo & branding",
          "AI-generated imagery & packaging design",
          "Web design in Figma",
          "Design system & style guide",
        ],
        story: {
          challenge:
            "Build a coffee brand that’s more about character than caffeine. Something warm, recognizable, and professional — with just the right amount of humor.",
          approach:
            "We started with AI-generated visuals to define the atmosphere, then designed the logo and color palette in Illustrator. From there, we built wireframes and a responsive web design in Figma that tells the story visually: cozy, modern, and just a bit cheeky.",
        },
        results: [
          "A consistent visual identity across packaging and web",
          "A brand that feels alive, creative, and ready to grow",
          "Strong storytelling that connects instantly",
        ],
      },
      nl: {
        title: "Brains Coffee",
        subtitle: "Concept koffiewinkel — branding, website en verpakking",
        explainer:
          "Brains Coffee is een conceptmerk dat we volledig van nul hebben opgebouwd: van naam en logo tot website en verpakkingen. Een fantasierijke twist op het idee dat iedereen ’s ochtends een beetje zombie is zonder koffie.",
        story: {
          challenge:
            "Een koffiemerk dat niet zomaar om bonen draait, maar om gevoel. Hoe maak je een merk dat humor, herkenning en stijl combineert — en tegelijk professioneel aanvoelt?",
          approach:
            "We begonnen met AI-gebaseerde beeldprompts om de sfeer te bepalen, daarna ontwikkelden we het logo en kleurenpalet in Illustrator. Vanuit die identiteit bouwden we wireframes en een webdesign in Figma dat het verhaal visueel maakt: warm, uitnodigend en een tikje speels.",
        },
        results: [
          "Eén herkenbare stijl over merk, web en verpakking",
          "Een merk dat glimlach én kwaliteit uitstraalt",
          "Klaar om als echt merk te lanceren",
        ],
        deliverables: [
          "Logo & branding",
          "AI-visuals & verpakkingen",
          "Webdesign in Figma",
          "Designsystem & stijlgids",
        ],
      },
      fr: {
        title: "Brains Coffee",
        subtitle: "Café concept — branding, site web et packagings",
        explainer:
          "Brains Coffee est une marque concept que nous avons imaginée de A à Z : nom, logo, packaging et site web. Une touche d’humour autour de l’idée que tout le monde se réveille un peu zombie avant son premier café.",
        story: {
          challenge:
            "Créer une identité chaleureuse et reconnaissable, capable d’allier professionnalisme et fantaisie, sans perdre en cohérence.",
          approach:
            "Nous avons d’abord généré des visuels avec l’IA pour poser l’ambiance, puis conçu le logo et la palette de couleurs dans Illustrator. Ensuite, nous avons construit les wireframes et le design web dans Figma pour raconter l’histoire visuellement : moderne, accueillant et un brin décalé.",
        },
        results: [
          "Une marque cohérente et créative",
          "Une identité prête à évoluer vers un vrai projet commercial",
          "Une présence visuelle forte et reconnaissable",
        ],
        deliverables: [
          "Logo et identité visuelle",
          "Visuels IA & design des packagings",
          "Webdesign Figma",
          "Design system et guide de styles",
        ],
      },
    },
    nextHref: "/work/respire",
  },

  // --- Respire ---
  respire: {
    slug: "respire",
    title: "Respire",
    subtitle: "Branding and landing page for a marketplace app",
    hero: heroImg,
    figmaUrl: "https://www.figma.com/design/T3oxiZitmf2KdoAEfKaHhm/Respire?node-id=1-113",
    explainer:
      "Respire is a digital concept we designed end-to-end — from brand identity and color palette to a working app prototype and a promotional website.",
    year: "2025",
    deliverables: [
      "Logo & branding",
      "App wireframes and flow",
      "Responsive landing page",
      "Design system & components",
    ],
    stackTags: ["Figma", "Branding", "UI/UX", "Web"],
    story: {
      challenge:
        "The idea behind the app was strong, but the message wasn’t landing fast enough. We needed a clear identity and a structure that guides users toward sign-up without confusion.",
      approach:
        "We developed a clean, friendly color palette and logo, then built the full app flow in Figma. The website focuses on clarity: simple copy, strong visuals, and an effortless path to learn more or register.",
    },
    results: [
      "Clearer message and smoother sign-up flow",
      "Cohesive look across app and web",
      "Structure ready for growth and advertising",
    ],
    cards: [
      { type: "video", src: blenderVideo },
      { type: "video", src: desktopVideo },
      { type: "image", src: heroImg },
      { type: "image", src: flowchartImg },
    ],
    i18n: {
      en: {
        title: "Respire",
        subtitle: "Branding and landing page for a marketplace app",
        explainer:
          "Respire is a digital concept we designed end-to-end — from brand identity and color palette to a working app prototype and a promotional website.",
        story: {
          challenge:
            "The idea behind the app was strong, but the message wasn’t landing fast enough. We needed a clear identity and a structure that guides users toward sign-up without confusion.",
          approach:
            "We developed a clean, friendly color palette and logo, then built the full app flow in Figma. The website focuses on clarity: simple copy, strong visuals, and an effortless path to learn more or register.",
        },
        results: [
          "Clearer message and smoother sign-up flow",
          "Cohesive look across app and web",
          "Structure ready for growth and advertising",
        ],
        deliverables: [
          "Logo & branding",
          "App wireframes and flow",
          "Responsive landing page",
          "Design system & components",
        ],
      },
      nl: {
        title: "Respire",
        subtitle: "Branding en landingspagina voor een marketplace-app",
        explainer:
          "Respire is een digitaal concept dat we uitwerkten van idee tot functioneel prototype. Naast de branding bouwden we de volledige appflow in Figma én een promowebsite om het concept tot leven te brengen.",
        story: {
          challenge:
            "Het concept was sterk, maar had nood aan een duidelijke identiteit en structuur. De focus lag op helderheid: hoe toon je in één blik wat de app doet, en waarom dat relevant is?",
          approach:
            "We ontwikkelden een fris kleurenpalet, logo en typografie, en bouwden vervolgens de appflow uit in Figma. De website die het project ondersteunt, legt de waarde van het platform uit met duidelijke visuals en een eenvoudige navigatie.",
        },
        results: [
          "Snellere ‘aha’-ervaring bij nieuwe bezoekers",
          "Duidelijke route naar inschrijving, ook op mobiel",
          "Structuur klaar voor advertising en verdere groei",
        ],
        deliverables: [
          "Logo & branding",
          "App-wireframes en designflow",
          "Responsieve landingspagina",
          "Designsystem & componenten",
        ],
      },
      fr: {
        title: "Respire",
        subtitle: "Branding et landing page pour une application marketplace",
        explainer:
          "Respire est un concept digital que nous avons développé de bout en bout : identité visuelle, palette de couleurs, prototype fonctionnel et site web de présentation.",
        story: {
          challenge:
            "L’idée de l’app était solide, mais manquait de clarté et de cohérence visuelle. Il fallait une identité forte et une structure qui facilite la compréhension et l’inscription.",
          approach:
            "Nous avons conçu une palette de couleurs fraîche et un logo reconnaissable, puis créé tout le flux de l’application dans Figma. Le site web traduit ce concept avec un ton simple, des visuels clairs et une navigation fluide.",
        },
        results: [
          "Une compréhension plus rapide du concept",
          "Une expérience fluide sur web et mobile",
          "Une base prête pour la croissance et la publicité",
        ],
        deliverables: [
          "Logo et branding",
          "Wireframes et flux applicatif",
          "Landing page responsive",
          "Design system et composants réutilisables",
        ],
      },
    },
    nextHref: "/work/swear",
  },

  // --- Swear London ---
  swear: {
    slug: "swear",
    title: "Swear London – 3D Sneaker Store",
    subtitle: "Interactive 3D sneaker experience",
    hero: swearHero,
    explainer:
      "For Swear London, we built an interactive 3D experience that lets customers explore, customize, and order sneakers in real time — fully aligned with the brand’s visual identity.",
    // keep your existing CTAs (Code is filtered out in CasePage)
    ctas: [
      { label: "Code", href: "https://github.com/kweozz/three.js-sneaker-store" },
      { label: "Live Website", href: "https://three-js-sneaker-store.vercel.app/" },
      { label: "Swear London", href: "https://www.swear-london.com/" }
    ],
    year: "2025",
    deliverables: [
      "3D viewer and configurator",
      "Interface design",
      "Integration with order system",
      "Documentation and handoff",
    ],
    stackTags: ["Three.js", "Vue.js", "JavaScript", "Node.js", "Vercel"],
    story: {
      challenge:
        "Swear wanted an online experience that feels as exclusive as their in-store service. The goal: merge customization and performance into one seamless, mobile-ready product.",
      approach:
        "We designed a clean, minimal interface around a fast 3D viewer built with Three.js. Users can instantly change colors, materials, and angles — all running smoothly across devices, directly connected to the order flow.",
    },
    results: [
      "Immersive digital experience that drives engagement",
      "Customers can visualize products before ordering",
      "Ready for e-commerce and global rollout",
    ],
    cards: [
      { type: "video", src: swearVideo },
      { type: "image", src: swearHero },
      { type: "image", src: swearShot3 },
      { type: "image", src: swearShot2 },
    ],
    i18n: {
      en: {
        title: "Swear London – 3D Sneaker Store",
        subtitle: "Interactive 3D sneaker experience",
        explainer:
          "For Swear London, we built an interactive 3D experience that lets customers explore, customize, and order sneakers in real time — fully aligned with the brand’s visual identity.",
        story: {
          challenge:
            "Swear wanted an online experience that feels as exclusive as their in-store service. The goal: merge customization and performance into one seamless, mobile-ready product.",
          approach:
            "We designed a clean, minimal interface around a fast 3D viewer built with Three.js. Users can instantly change colors, materials, and angles — all running smoothly across devices, directly connected to the order flow.",
        },
        results: [
          "Immersive digital experience that drives engagement",
          "Customers can visualize products before ordering",
          "Ready for e-commerce and global rollout",
        ],
      },
      nl: {
        title: "Swear London – 3D Sneaker Store",
        subtitle: "Interactieve 3D-sneakerervaring",
        explainer:
          "Voor Swear London bouwden we een interactieve 3D-ervaring waarin klanten hun sneaker realtime kunnen ontdekken en personaliseren — volledig in lijn met de visuele stijl van het merk.",
        story: {
          challenge:
            "Swear wilde een digitale ervaring die even uniek voelt als hun winkel. De uitdaging was om personalisatie en performance samen te brengen: een krachtige 3D-configurator die ook op mobiel soepel werkt.",
          approach:
            "We ontwierpen een overzichtelijke interface rond een snelle 3D-viewer. De configurator is gebouwd met Three.js en Vue.js en laat bezoekers kleuren en materialen aanpassen in realtime. Alles draait om een vloeiende ervaring — geen laadtijden, geen haperingen.",
        },
        results: [
          "Meer betrokkenheid door een rijke productbeleving",
          "Minder twijfel: klanten zien meteen wat ze krijgen",
          "Klaar voor e-commerce en internationale uitrol",
        ],
        deliverables: [
          "3D-viewer en configurator",
          "Interface-ontwerp",
          "Koppeling met bestelstroom",
          "Documentatie en overdracht",
        ],
      },
      fr: {
        title: "Swear London – boutique 3D",
        subtitle: "Expérience sneakers 3D interactive",
        explainer:
          "Pour Swear London, nous avons créé une expérience 3D interactive permettant aux clients d’explorer, personnaliser et commander leurs baskets en temps réel — tout en respectant l’identité visuelle de la marque.",
        story: {
          challenge:
            "Swear voulait une expérience en ligne aussi unique que leur service en boutique. Le défi : allier personnalisation et fluidité sur tous les appareils.",
          approach:
            "Nous avons conçu une interface claire autour d’un viewer 3D rapide développé avec Three.js. Les utilisateurs changent les couleurs et matériaux en direct, sans ralentissement, et peuvent commander en quelques clics.",
        },
        results: [
          "Une expérience web immersive qui renforce l’attachement à la marque",
          "Visualisation complète avant l’achat",
          "Prête pour l’e-commerce et le déploiement international",
        ],
        deliverables: [
          "Visionneuse et configurateur 3D",
          "Design de l’interface",
          "Intégration au système de commande",
          "Documentation et transfert",
        ],
      },
    },
    nextHref: "/work/brainscoffee",
  },
};