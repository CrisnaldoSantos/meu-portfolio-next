import Header from "@/components/structure/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SkillsCategories from "@/components/sections/SkillsCategories";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/structure/Footer";
import SocialSidebar from "@/components/sections/SocialSidebar";
import ScrollToTop from "@/components/structure/ScrollToTop";

export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <main className="container mx-auto px-6">
        <About />
        <Experience />
        <SkillsCategories />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
      <ScrollToTop />
    </div>
  );
}
