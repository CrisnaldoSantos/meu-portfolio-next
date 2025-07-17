import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.1] bg-grid-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Olá! Sou{" "}
                  <strong className="text-foreground">
                    Crisnaldo Carvalho
                  </strong>
                  , um desenvolvedor full stack sênior apaixonado por criar
                  soluções digitais inovadoras e eficientes. Com anos de
                  experiência no mercado, tenho me especializado em tecnologias
                  modernas como React, Node.js e TypeScript.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Minha jornada no desenvolvimento começou com curiosidade e
                  evoluiu para uma paixão genuína por resolver problemas
                  complexos através do código. Acredito que a tecnologia deve
                  ser acessível, performática e, acima de tudo, útil para as
                  pessoas.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quando não estou codando, gosto de estudar novas tecnologias,
                  contribuir com projetos open source e compartilhar
                  conhecimento com a comunidade de desenvolvedores.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Principais Tecnologias
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: "React", color: "blue" },
                    { name: "Next.js", color: "gray" },
                    { name: "TypeScript", color: "blue" },
                    { name: "Node.js", color: "green" },
                    { name: "Express", color: "gray" },
                    { name: "MongoDB", color: "green" },
                    { name: "PostgreSQL", color: "blue" },
                    { name: "Tailwind", color: "cyan" },
                    { name: "Git", color: "orange" },
                  ].map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="px-3 py-2 text-sm justify-center hover:bg-primary/10 transition-colors duration-300"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
                <div className="relative">
                  <div className="w-80 h-80 relative overflow-hidden rounded-2xl">
                    <Image
                      src="https://avatars3.githubusercontent.com/u/45441190?s=400&u=41ad579bcaaf3c42cb04d9263cd123427866b6f7&v=4"
                      alt="Crisnaldo Carvalho - Desenvolvedor Full Stack"
                      width={320}
                      height={320}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                </div>

                {/* Quote */}
                <div className="mt-6 text-center">
                  <blockquote className="text-sm italic text-muted-foreground">
                    &ldquo;Transformando ideias em código, código em
                    soluções.&rdquo;
                  </blockquote>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
