import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/80"></div>

      {/* Floating Cards for Visual Interest */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Card className="p-4 bg-primary/10 border-primary/20">
          <div className="text-xs text-primary font-mono">React</div>
        </Card>
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <Card className="p-4 bg-blue-500/10 border-blue-500/20">
          <div className="text-xs text-blue-500 font-mono">TypeScript</div>
        </Card>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <Card className="p-4 bg-green-500/10 border-green-500/20">
          <div className="text-xs text-green-500 font-mono">Node.js</div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Crisnaldo Carvalho
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Desenvolvedor Full Stack Sênior
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Criando experiências digitais modernas com{" "}
              <span className="text-amber-900 font-semibold">JavaScript</span>,{" "}
              <span className="text-blue-500 font-semibold">React</span> e{" "}
              <span className="text-green-500 font-semibold">Node.js</span>
            </p>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-3 py-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="px-8 py-3 text-lg group">
              Ver Projetos
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { name: "GitHub", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "Email", href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
