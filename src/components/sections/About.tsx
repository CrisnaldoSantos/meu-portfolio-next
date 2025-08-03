"use client";

import { AboutMe } from "@/services/types";
import Image from "next/image";
import SessionTitle from "../structure/section-title";

interface AboutProps {
  aboutData?: AboutMe | null;
}

const About = ({ aboutData }: AboutProps) => {
  const defaultHtml = `
    <p>Olá! Meu nome é Crisnaldo e gosto de criar coisas que vivem na internet. Meu interesse em desenvolvimento web começou em 2020 quando decidi tentar editar sites estáticos.</p>
    <p>Hoje trabalho como desenvolvedor full-stack, criando aplicações web modernas e eficientes com foco na melhor experiência do usuário.</p>
    <p>Tenho experiência com JavaScript, TypeScript, React, Next.js, Node.js e muito mais!</p>
  `;

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="01" title="Sobre Mim" />
        <div className="grid md:grid-cols-5 gap-10">
          <div
            className="md:col-span-3 text-slate text-lg space-y-4"
            dangerouslySetInnerHTML={{
              __html: aboutData?.resume.html || defaultHtml,
            }}
          />
          <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 bg-accent rounded-lg  translate-x-2 translate-y-2"></div>
              <Image
                src={
                  aboutData?.image.url ||
                  "https://github.com/CrisnaldoSantos.png?size=256"
                }
                alt="Foto de Crisnaldo Carvalho"
                width={256}
                height={256}
                className="relative w-full h-full object-cover rounded-lg z-10 grayscale-0 hover:grayscale-00 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://placehold.co/256x256/112240/64FFDA?text=C/C";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
