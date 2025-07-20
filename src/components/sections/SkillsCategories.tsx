"use client";

import SessionTitle from "../structure/section-title";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillsCategories = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Ferramentas",
      skills: [
        "JavaScript",
        "ReactJS",
        "TypeScript",
        "NodeJS",
        "NextJS",
        "NestJS",
      ],
    },
    {
      title: "Messageria",
      skills: ["RabbitMQ", "SQS", "PubSub"],
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      title: "Cloud",
      skills: ["Google Cloud Platform - GCP", "Amazon Web Services - AWS"],
    },
    {
      title: "Desenvolvimento Ágil",
      skills: ["Scrum", "Kanban"],
    },
    {
      title: "Fluxo de Código",
      skills: ["Git Flow", "Trunk-based development"],
    },
    {
      title: "Suite de Testes",
      skills: ["Jest", "Testing Library", "Cypress"],
    },
    {
      title: "Orquestração",
      skills: ["Docker", "Kubernetes"],
    },
  ];

  return (
    <section id="skills-categories" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="03" title="Habilidades" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-light-navy rounded-lg p-6 hover:bg-opacity-80 transition-all duration-300 border border-slate-700/30"
              >
                <h3 className="text-xl font-bold text-accent mb-4 font-fira border-b border-accent/20 pb-2">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-slate group-hover:text-lightest-slate transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Seção adicional com estatísticas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-fira mb-2">
                8+
              </div>
              <div className="text-slate text-sm uppercase tracking-wide">
                Categorias
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-fira mb-2">
                25+
              </div>
              <div className="text-slate text-sm uppercase tracking-wide">
                Tecnologias
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-fira mb-2">
                6+
              </div>
              <div className="text-slate text-sm uppercase tracking-wide">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCategories;
