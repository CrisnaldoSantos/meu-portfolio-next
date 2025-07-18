"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-lightest-slate mb-8 font-fira flex items-center">
          <span className="text-accent mr-3">01.</span> Sobre Mim
          <span className="flex-grow h-px bg-slate-700 ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 text-slate text-lg space-y-4">
            <p>
              Olá! Sou Crisnaldo, um desenvolvedor que adora dar vida a ideias
              na internet. Meu interesse por desenvolvimento web começou em
              2020, quando decidi tentar editar um tema de blog — e acabei
              aprendendo sobre HTML & CSS!
            </p>
            <p>
              Avançando para hoje, tive o privilégio de trabalhar em uma{" "}
              <Link href="#" className="text-accent link-underline">
                agência de publicidade
              </Link>
              , uma{" "}
              <Link href="#" className="text-accent link-underline">
                startup
              </Link>{" "}
              e uma{" "}
              <Link href="#" className="text-accent link-underline">
                grande corporação
              </Link>
              . Meu foco principal atualmente é construir produtos e
              experiências digitais inclusivas e de alta performance para nossos
              clientes.
            </p>
            <p>
              Sou um entusiasta do ecossistema JavaScript e passo a maior parte
              do meu tempo trabalhando com tecnologias modernas para criar
              aplicações web robustas e escaláveis.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 bg-accent rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <Image
                src="https://github.com/CrisnaldoSantos.png?size=256"
                alt="Foto de Crisnaldo Carvalho"
                width={256}
                height={256}
                className="relative w-full h-full object-cover rounded-lg z-10 grayscale hover:grayscale-0 transition-all duration-300"
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
