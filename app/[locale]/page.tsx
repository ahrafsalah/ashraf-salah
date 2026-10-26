import Header from "@/components/Header";
import Landing from "@/components/Landing";
import LangSwitcher from "@/components/LanguageSwitcher";
import Projects from "@/components/projects/Projects";
import Services from "@/components/Services";
import HeroGraphics from "@/components/Skils";

export default async function HomePage() {
  return (
    <main className="flex-1 w-full text-white ">
      <Landing />
      <HeroGraphics />
      <Services />
      <Projects />
    </main>
  );
}
