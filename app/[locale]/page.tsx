import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skils";
import Services from "@/components/Services";
import Projects from "@/components/projects/Projects";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Testimonials from "@/components/testimonials/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default async function HomePage() {
  return (
    <main className="flex-1 w-full text-white ">
      <Landing />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
