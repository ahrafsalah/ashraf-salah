export interface Testimonial {
  name: string;
  role: { en: string; ar: string };
  quote: { en: string; ar: string };
  /** 1 to 5 */
  rating: number;
  date?: string;
  linkedin?: string;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    role: {
      en: "UI/UX Designer",
      ar: "مصمم واجهات وتجربة مستخدم",
    },
    quote: {
      en: "Working with him was a great experience. He has a strong eye for detail and consistently transforms designs into clean, responsive, and pixel-perfect interfaces.",
      ar: "العمل معه كان تجربة رائعة. لديه اهتمام كبير بالتفاصيل ويستطيع تحويل التصميمات إلى واجهات احترافية ومتجاوبة بدقة عالية.",
    },
    rating: 5,
    date: "2026-06-15",
    avatar: "/images/avatar-01.png",
  },
  {
    name: "Mohamed Ali",
    role: {
      en: "Backend Developer",
      ar: "مطور Backend",
    },
    quote: {
      en: "A talented frontend developer who understands how to build scalable and maintainable applications. Communication and teamwork were excellent throughout the project.",
      ar: "مطور واجهات متميز يفهم جيدًا كيفية بناء تطبيقات قابلة للتطوير والصيانة. التواصل والعمل الجماعي كانا ممتازين طوال المشروع.",
    },
    rating: 5,
    date: "2026-03-10",
    avatar: "/images/avatar-02.png",
  },
  {
    name: "Omar Salah",
    role: {
      en: "Project Manager",
      ar: "مدير مشاريع",
    },
    quote: {
      en: "He delivered the project on time with excellent quality. His ability to solve problems, handle feedback, and pay attention to small details made a real difference.",
      ar: "قام بتسليم المشروع في الوقت المحدد بجودة ممتازة. قدرته على حل المشكلات والتعامل مع الملاحظات والاهتمام بأدق التفاصيل أحدثت فرقًا كبيرًا.",
    },
    rating: 5,
    date: "2025-11-20",
    avatar: "/images/avatar-03.png",
  },
  {
    name: "Omar Khaled",
    role: {
      en: "Software Engineer",
      ar: "مهندس برمجيات",
    },
    quote: {
      en: "His React and TypeScript skills are impressive. He writes clean code, builds reusable components, and always looks for ways to improve the user experience.",
      ar: "مهاراته في React وTypeScript مميزة جدًا. يكتب كودًا منظمًا، ويبني مكونات قابلة لإعادة الاستخدام، ويهتم دائمًا بتحسين تجربة المستخدم.",
    },
    rating: 5,
    date: "2025-8-05",
    avatar: "/images/avatar-04.png",
  },
  {
    name: "Said Ahmed",
    role: {
      en: "Startup Founder",
      ar: "مؤسس شركة ناشئة",
    },
    quote: {
      en: "I really appreciated his professionalism and dedication. He turned our ideas into a modern, fast, and user-friendly web experience.",
      ar: "أقدّر جدًا احترافيته والتزامه. استطاع تحويل أفكارنا إلى تجربة ويب عصرية وسريعة وسهلة الاستخدام.",
    },
    rating: 5,
    date: "2025-05-12",
    avatar: "/images/avatar-05.png",
  },
];
