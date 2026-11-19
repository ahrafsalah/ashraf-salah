import type { Metadata } from "next";
import { Cairo, Inter, Preahvihear } from "next/font/google";
//@ts-ignore
import "../globals.css";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Set NEXT_PUBLIC_SITE_URL in your hosting env to your real domain.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashraf-salah.vercel.app";

// Body font for English: a clean, readable sans-serif.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Display font kept only for the section headings (English).
const preah = Preahvihear({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Arabic needs the "arabic" subset, otherwise the browser falls back to a system font.
const cairo = Cairo({
  weight: ["300", "400", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const isAr = locale === "ar";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s | Ashraf Salah",
    },
    description: t("description"),
    keywords: [
      "Ashraf Salah",
      "أشرف صلاح",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Tailwind CSS",
      "مطور واجهات أمامية",
      "مطور ويب",
      "Egypt",
    ],
    authors: [{ name: "Ashraf Salah", url: SITE_URL }],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Ashraf Salah",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Ashraf Salah - Frontend Developer",
        },
      ],
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_EG"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (locale !== "en" && locale !== "ar") {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const activeFontClass = locale === "ar" ? cairo.className : inter.className;
  // The display font variable is only attached in English.
  const headingFontVar = locale === "ar" ? "" : preah.variable;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashraf Salah",
    alternateName: "أشرف صلاح",
    jobTitle: "Frontend Developer",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tanta",
      addressCountry: "EG",
    },
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    sameAs: [
      "https://github.com/Ashraf-Salah3",
      "https://www.linkedin.com/in/ashraf-salah-9b339a291",
    ],
  };

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${headingFontVar} ${activeFontClass} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <Toaster position="top-right" reverseOrder={false} />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
