import Header from "@/components/structure/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/structure/Footer";
import SocialSidebar from "@/components/SocialSidebar";

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
