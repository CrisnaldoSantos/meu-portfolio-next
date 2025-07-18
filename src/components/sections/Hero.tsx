"use client";

import { useState, useEffect } from "react";
import { useHeroData } from "../../hooks/useHeroData";
import HookValidateGuard from "../guards/hook-validate-guard";

const Hero = () => {
  const [typingText, setTypingText] = useState("");
  const { heroData, loading, error } = useHeroData();

  useEffect(() => {
    const phrases = heroData?.phrases || [
      "Eu construo coisas para a web.",
      "Desenvolvedor Front-end.",
      "Entusiasta de JavaScript.",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      } else {
        setTypingText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(() => {
            type();
          }, 2000);
          return;
        }
      }

      const typingSpeed = isDeleting ? 50 : 120;
      timeoutId = setTimeout(type, typingSpeed);
    };

    // Limpa o texto e reinicia o efeito
    setTypingText("");
    type();

    // Cleanup function para limpar timeouts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [heroData?.phrases]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <HookValidateGuard error={error} loading={loading}>
            <>
              <p className="font-fira text-accent text-lg mb-4">
                {heroData?.presentation || "Olá, meu nome é"}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightest-slate">
                {heroData?.title || "Crisnaldo Carvalho."}
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate mt-2 min-h-32">
                <span>{typingText}</span>
                <span className="typing-cursor"></span>
              </h2>
              <p className="mt-6 max-w-xl text-slate text-lg">
                {heroData?.description}
              </p>
              <button
                onClick={scrollToProjects}
                className="inline-block mt-8 px-8 py-4 border border-accent text-accent font-fira rounded hover:bg-accent hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-accent transition-all duration-300"
              >
                {heroData?.buttonLabel || "Veja meus projetos a!"}
              </button>
            </>
          </HookValidateGuard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
