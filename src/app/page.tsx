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

// Importar os serviços para buscar dados no servidor
import { getHeroData } from "@/services/get-hero-data";
import { getAboutMeData } from "@/services/get-about-me-data";
import { getExperienceData } from "@/services/get-experience-data";
import { getSkillsData } from "@/services/get-skills-data";
import { getProjectsData } from "@/services/get-projects-data";

export default async function Home() {
  // Buscar todos os dados no servidor
  let heroData = null;
  let aboutData = null;
  let experienceData = null;
  let skillsData = null;
  let projectsData = null;

  try {
    const [heroRes, aboutRes, experienceRes, skillsRes, projectsRes] =
      await Promise.allSettled([
        getHeroData(),
        getAboutMeData(),
        getExperienceData(),
        getSkillsData(),
        getProjectsData(),
      ]);

    if (heroRes.status === "fulfilled")
      heroData = heroRes.value.heroes?.[0] || null;
    if (aboutRes.status === "fulfilled")
      aboutData = aboutRes.value.aboutMes?.[0] || null;
    if (experienceRes.status === "fulfilled")
      experienceData = experienceRes.value.experiences || [];
    if (skillsRes.status === "fulfilled")
      skillsData = skillsRes.value.skillCategories || [];
    if (projectsRes.status === "fulfilled")
      projectsData = projectsRes.value.projects || [];
  } catch (error) {
    console.error("Erro ao buscar dados no servidor:", error);
  }

  return (
    <div className="antialiased">
      <Header />
      <Hero heroData={heroData} />
      <main className="container mx-auto px-6">
        <About aboutData={aboutData} />
        <Experience experienceData={experienceData} />
        <SkillsCategories />
        <Skills />
        <Projects projectsData={projectsData} />
        <Contact />
      </main>
      <Footer />
      <SocialSidebar />
      <ScrollToTop />
    </div>
  );
}
