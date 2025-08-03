import Script from "next/script";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Crisnaldo Carvalho",
    jobTitle: "Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor full-stack especialista em JavaScript/TypeScript, React, Next.js e Node.js",
    url: "https://www.crisnaldocarvalho.com.br",
    sameAs: [
      "https://github.com/CrisnaldoSantos",
      "https://linkedin.com/in/crisnaldocarvalho",
      "https://twitter.com/crisnaldodev",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Autodidata em Tecnologia",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "Brasil",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
