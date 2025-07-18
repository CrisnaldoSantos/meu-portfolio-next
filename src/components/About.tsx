"use client";

import { useAboutMeData } from "@/hooks/useAboutMeData";
import Image from "next/image";
import HookValidateGuard from "./guards/hook-validate-guard";

const About = () => {
  const { aboutMeData, loading, error } = useAboutMeData();
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-lightest-slate mb-8 font-fira flex items-center">
          <span className="text-accent mr-3">01.</span> Sobre Mim
          <span className="flex-grow h-px bg-slate-700 ml-4"></span>
        </h2>
        <HookValidateGuard error={error} loading={loading}>
          <div className="grid md:grid-cols-5 gap-10">
            <div
              className="md:col-span-3 text-slate text-lg space-y-4"
              dangerouslySetInnerHTML={{
                __html: aboutMeData?.resume.html || "",
              }}
            />
            <div className="md:col-span-2 flex justify-center items-start">
              <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 bg-accent rounded-lg  translate-x-2 translate-y-2"></div>
                <Image
                  src={
                    aboutMeData?.image.url ||
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
        </HookValidateGuard>
      </div>
    </section>
  );
};

export default About;
