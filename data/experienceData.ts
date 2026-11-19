export interface ExperienceItem {
  id: string;
  company: string;
  role: { en: string; ar: string };
  type: "freelance" | "personal";
  period: { en: string; ar: string };
  bullets: { en: string[]; ar: string[] };
  live?: string;
}

// Source: Ashraf's CV.
export const experienceData: ExperienceItem[] = [
  {
    id: "spider-academy",
    company: "Spider Academy",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "freelance",
    period: { en: "2025 – Present", ar: "2025 – الآن" },
    bullets: {
      en: [
        "Built the frontend of a cybersecurity and programming learning platform with Next.js for performance and SEO.",
        "Implemented dynamic course listings with category filtering, fed by RESTful APIs.",
        "Used Server-Side Rendering for faster page loads and a fully responsive UI across devices.",
      ],
      ar: [
        "بنيت الواجهة الأمامية لمنصة تعليمية في الأمن السيبراني والبرمجة باستخدام Next.js لأداء أفضل وتهيئة لمحركات البحث.",
        "نفّذت قوائم دورات ديناميكية مع تصفية حسب التصنيف، تُجلب بياناتها عبر RESTful APIs.",
        "استخدمت الـ Server-Side Rendering لتحميل أسرع، مع واجهة متجاوبة بالكامل على كل الأجهزة.",
      ],
    },
    live: "https://spider-academy.vercel.app/",
  },
  {
    id: "spider-ctf",
    company: "Spider CTF",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "freelance",
    period: { en: "2025 – Present", ar: "2025 – الآن" },
    bullets: {
      en: [
        "Developed and optimized the interface of a CTF competition platform using React.js.",
        "Built a feature for admins to create and manage competitions and set challenges dynamically.",
        "Designed interactive dashboards and intuitive navigation, with APIs showing live challenges, scores, and user progress.",
      ],
      ar: [
        "طوّرت وحسّنت واجهة منصة مسابقات CTF باستخدام React.js.",
        "بنيت ميزة تتيح للمشرفين إنشاء المسابقات وإدارتها وتحديد التحديات ديناميكيًا.",
        "صمّمت لوحات تحكم تفاعلية وتنقلًا سهلًا، مع ربط بالـ APIs لعرض التحديات والنتائج وتقدّم المستخدمين لحظيًا.",
      ],
    },
    live: "https://spider-ctf.vercel.app/",
  },
  {
    id: "ecosystem",
    company: "Ecosystem",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "freelance",
    period: { en: "2025 – Present", ar: "2025 – الآن" },
    bullets: {
      en: [
        "Built a fully responsive website with Next.js and Tailwind CSS.",
        "Applied SEO best practices, including dynamic meta tags and Open Graph support.",
        "Added an MDX-powered blog section with code highlighting, and focused on performance and cross-device compatibility.",
      ],
      ar: [
        "بنيت موقعًا متجاوبًا بالكامل باستخدام Next.js وTailwind CSS.",
        "طبّقت أفضل ممارسات الـ SEO، ومنها meta tags الديناميكية ودعم Open Graph.",
        "أضفت قسم مدونة بتقنية MDX مع تلوين الكود، وركّزت على الأداء والتوافق مع مختلف الأجهزة.",
      ],
    },
    live: "https://ecosystem-two.vercel.app/",
  },
  {
    id: "inside-home",
    company: "React E-commerce Website (Inside Home)",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "freelance",
    period: { en: "2024 – Present", ar: "2024 – الآن" },
    bullets: {
      en: [
        "Developed a fully functional e-commerce platform with React.js, including an admin panel to manage products, orders, and users.",
        "Converted Figma and Adobe XD designs into a responsive web application.",
        "Collaborated with designers and backend developers to gather requirements and deliver the result.",
      ],
      ar: [
        "طوّرت منصة تجارة إلكترونية متكاملة بـ React.js تشمل لوحة تحكم لإدارة المنتجات والطلبات والمستخدمين.",
        "حوّلت تصاميم Figma وAdobe XD إلى تطبيق ويب متجاوب.",
        "تعاونت مع المصممين ومطوّري الـ backend لجمع المتطلبات وتسليم النتيجة.",
      ],
    },
    live: "https://inside-home.vercel.app/",
  },
  {
    id: "chat-app",
    company: "Chat App",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "personal",
    period: { en: "2024 – Present", ar: "2024 – الآن" },
    bullets: {
      en: [
        "Created a real-time chat application with React and Firebase Firestore.",
        "Integrated user authentication, profile management, and real-time image sharing.",
      ],
      ar: [
        "أنشأت تطبيق محادثة لحظي باستخدام React وFirebase Firestore.",
        "دمجت تسجيل الدخول وإدارة الملف الشخصي ومشاركة الصور بشكل لحظي.",
      ],
    },
  },
  {
    id: "bazar-shop",
    company: "React E-commerce Website (Bazar Shop)",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    type: "personal",
    period: { en: "2023 – Present", ar: "2023 – الآن" },
    bullets: {
      en: [
        "Built a full e-commerce platform with React on the frontend and Firebase on the backend.",
        "Implemented product search and user authentication, with mobile responsiveness and faster load times.",
      ],
      ar: [
        "بنيت منصة تجارة إلكترونية كاملة بـ React للواجهة وFirebase للـ backend.",
        "نفّذت البحث عن المنتجات وتسجيل الدخول، مع تجاوب كامل على الموبايل وتحسين سرعة التحميل.",
      ],
    },
    live: "https://ashraf-salah3.github.io/bazar-shop/",
  },
];
