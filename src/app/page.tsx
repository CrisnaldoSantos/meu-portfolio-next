import Header from "@/components/structure/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/structure/Footer";
import SocialSidebar from "@/components/sections/SocialSidebar";

export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <main className="container mx-auto px-6">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
    </div>
  );
}
