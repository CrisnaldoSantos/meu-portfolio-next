"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (lastScrollY < currentScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-opacity-90 backdrop-blur-sm ${
        isScrolled ? "shadow-lg bg-light-navy" : ""
      } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="font-fira text-2xl font-bold text-accent">
          C/C
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="font-fira text-lightest-slate hover:text-accent transition-colors duration-300 link-underline"
          >
            <span className="text-accent">01.</span> Sobre
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="font-fira text-lightest-slate hover:text-accent transition-colors duration-300 link-underline"
          >
            <span className="text-accent">02.</span> Experiência
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="font-fira text-lightest-slate hover:text-accent transition-colors duration-300 link-underline"
          >
            <span className="text-accent">03.</span> Habilidades
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-fira text-lightest-slate hover:text-accent transition-colors duration-300 link-underline"
          >
            <span className="text-accent">04.</span> Projetos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-fira text-lightest-slate hover:text-accent transition-colors duration-300 link-underline"
          >
            <span className="text-accent">05.</span> Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-6 pt-2 pb-4 space-y-3 flex flex-col items-center font-fira">
          <button
            onClick={() => scrollToSection("about")}
            className="block text-lightest-slate hover:text-accent transition-colors duration-300"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="block text-lightest-slate hover:text-accent transition-colors duration-300"
          >
            Experiência
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block text-lightest-slate hover:text-accent transition-colors duration-300"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block text-lightest-slate hover:text-accent transition-colors duration-300"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block text-lightest-slate hover:text-accent transition-colors duration-300"
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
