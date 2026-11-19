export interface Project {
  id: number;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  categories: string[];
  /** Link to the deployed project. Leave empty to hide the button. */
  live?: string;
  /** Link to the GitHub repository. Leave empty to hide the button. */
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: 2,
    title: {
      en: "Home Products E-commerce Store",
      ar: "متجر إلكتروني للمستلزمات المنزلية",
    },
    description: {
      en: "A responsive online store for home products with product listings, detailed product pages, and a smooth cart experience. Built with a focus on clear content organization, a consistent look on every device, and SEO.",
      ar: "متجر إلكتروني متجاوب للمستلزمات المنزلية يضم قوائم المنتجات وصفحة تفصيلية لكل منتج وعربة تسوق سلسة. ركّزت فيه على وضوح تنظيم المحتوى وثبات المظهر على مختلف الأجهزة وتهيئته لمحركات البحث.",
    },
    image: "/images/untitled-2.webp",
    categories: ["React", "Sass", "Material UI", "SEO"],
    live: "https://inside-home.vercel.app/",
    github: "",
  },
  {
    id: 3,
    title: {
      en: "Software Company Website",
      ar: "موقع تعريفي لشركة برمجيات",
    },
    description: {
      en: "A modern corporate website that presents a software company's services, previous work, and contact details, organized so visitors understand what the company offers within seconds. Built with Next.js, TypeScript, and Tailwind CSS.",
      ar: "موقع تعريفي عصري يعرض خدمات شركة برمجيات وسابقة أعمالها وبيانات التواصل معها، منظّم بحيث يفهم الزائر ما تقدمه الشركة خلال ثوانٍ. بُني باستخدام Next.js وTypeScript وTailwind CSS.",
    },
    image: "/images/untitled-3.webp",
    categories: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    live: "https://ecosystem-two.vercel.app/",
    github: "",
  },
  {
    id: 4,
    title: {
      en: "Cybersecurity Academy Website",
      ar: "موقع أكاديمية للأمن السيبراني",
    },
    description: {
      en: "A learning platform website for a cybersecurity academy with course listings, enrollment options, and learning resources, arranged so students can find what they need quickly in a modern, easy-to-navigate layout.",
      ar: "موقع منصة تعليمية لأكاديمية أمن سيبراني يضم قوائم الدورات وخيارات التسجيل والمصادر التعليمية، مرتبة في واجهة حديثة وسهلة التصفح ليصل الطالب إلى ما يحتاجه بسرعة.",
    },
    image: "/images/untitled-5.webp",
    categories: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    live: "https://spider-academy.vercel.app/",
    github: "",
  },
  {
    id: 7,
    title: {
      en: "Real-time Chat Application",
      ar: "تطبيق محادثة فوري (Real-time)",
    },
    description: {
      en: "A real-time chat app with multi-user conversations where messages are delivered the moment they're sent. Built with Next.js, Socket.io, Express, and MongoDB, with a simple, responsive interface.",
      ar: "تطبيق محادثة فوري يدعم تعدد المستخدمين وتصل فيه الرسائل لحظة إرسالها. بُني باستخدام Next.js وSocket.io وExpress وMongoDB بواجهة بسيطة وسريعة الاستجابة.",
    },
    image: "/images/chatty.webp",
    categories: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "MongoDB",
      "Express",
    ],
    live: "",
    github: "",
  },
  {
    id: 1,
    title: {
      en: "CTF Platform & Challenges",
      ar: "منصة وتحديات التقاط العلم (CTF)",
    },
    description: {
      en: "Hands-on cybersecurity practice through Capture The Flag challenges: analyzing systems, hunting for vulnerabilities, and breaking security problems into clear steps. It shaped the security mindset I bring to every application I build.",
      ar: "تطبيق عملي للأمن السيبراني من خلال تحديات التقاط العلم (CTF): تحليل الأنظمة، والبحث عن الثغرات، وتقسيم المشكلة الأمنية إلى خطوات واضحة. وهي التجربة التي صنعت عقليتي الأمنية التي أحملها في كل تطبيق أبنيه.",
    },
    image: "/images/untitled-1.webp",
    categories: ["React", "Sass", "Material UI", "Security"],
    live: "https://spider-ctf.vercel.app/",
    github: "",
  },
];
