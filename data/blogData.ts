export interface BlogPost {
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  date: string; // e.g. "2026-11-19"
  url: string;
}

// Add your articles here. The Blog section stays hidden while this is empty.
export const blogData: BlogPost[] = [
  {
    title: {
      en: "Understanding TypeScript: A Beginner's Guide",
      ar: "فهم TypeScript: دليل للمبتدئين",
    },
    excerpt: {
      en: "TypeScript is a powerful tool for building robust applications. In this article, we explore its features and benefits.",
      ar: "TypeScript هو أداة قوية لبناء تطبيقات قوية. في هذا المقال، نستكشف ميزاته وفوائده.",
    },
    date: "2026-11-19",
    url: "/blog/understanding-typescript",
  },
  {
    title: {
      en: "Advanced React Patterns for Scalable Applications",
      ar: "أنماط React المتقدمة لتطبيقات قابلة للتوسع",
    },
    excerpt: {
      en: "Learn about advanced React patterns that can help you build scalable and maintainable applications.",
      ar: "تعرف على أنماط React المتقدمة التي يمكن أن تساعدك في بناء تطبيقات قابلة للتوسع وسهلة الصيانة.",
    },
    date: "2026-10-15",
    url: "/blog/advanced-react-patterns",
  },
  {
    title: {
      en: "State Management in Modern Web Applications",
      ar: "إدارة الحالة في تطبيقات الويب الحديثة",
    },
    excerpt: {
      en: "State management is a crucial aspect of modern web development. This article discusses various state management techniques and libraries.",
      ar: "إدارة الحالة هي جانب حيوي من تطوير الويب الحديث. يناقش هذا المقال تقنيات ومكتبات إدارة الحالة المختلفة.",
    },
    date: "2026-09-10",
    url: "/blog/state-management-modern-web-applications",
  },
  {
    title: {
      en: "Building a Full-Stack App with Next.js and Firebase",
      ar: "بناء تطبيق كامل بواسطة Next.js وFirebase",
    },
    excerpt: {
      en: "Learn how to build a full-stack web application with Next.js and Firebase.",
      ar: "تعرف على كيفية بناء تطبيق ويب كامل بواسطة Next.js وFirebase.",
    },
    date: "2026-08-05",
    url: "/blog/building-a-full-stack-app-with-nextjs-and-firebase",
  },
];
