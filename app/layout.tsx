import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-ignore
import "./globals.css";
import Header from "../components/Header";
import { Preahvihear } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const preah = Preahvihear({
  weight: "400",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: 'Ashraf Salah | أشرف صلاح - Web Developer', 
    template: '%s | Ashraf Salah (أشرف صلاح)', 
  },
  description: 'الموقع الرسمي للمطور أشرف صلاح. استعرض أحدث مشاريع وتطبيقات الويب - Official portfolio of Ashraf Salah, showcasing latest web development projects.',
  keywords: [
    'Ashraf Salah', 'أشرف صلاح', 'مطور ويب', 'معرض أعمال', 'Full Stack Developer', 
    'React Developer', 'Next.js Portfolio', 'برمجة مواقع', 'Front End'
  ],
  authors: [{ name: 'Ashraf Salah' }],
  

  openGraph: {
    title: 'Ashraf Salah | أشرف صلاح - Portfolio',
    description: 'استعرض أحدث المشاريع وتطبيقات الويب التي قمت بتطويرها - Explore my latest web development projects.',
    url: 'https://ashraf-salah.com', 
    siteName: 'Ashraf Salah Portfolio',
    images: [
      {
        url: 'https://ashraf-salah.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashraf Salah Portfolio',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${preah.className} antialiased`}
      >
        <Toaster/>
        <Header/>
        {children}
           <Footer/>
      </body>
    </html>
  );
}
