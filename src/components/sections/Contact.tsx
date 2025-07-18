import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-fira text-accent mb-2">
          05. Qual o próximo passo?
        </h2>
        <h3 className="font-fira text-4xl md:text-5xl font-bold text-lightest-slate mb-4">
          Entre em Contato
        </h3>
        <p className="max-w-xl mx-auto text-slate mb-8">
          Estou sempre aberto a novas oportunidades e conexões. Se você tem uma
          pergunta, uma proposta ou apenas quer dizer oi, minha caixa de entrada
          está sempre aberta. Farei o meu melhor para responder a você!
        </p>
        <Link
          href="mailto:seuemail@example.com"
          className="inline-block px-8 py-4 border border-accent text-accent font-fira rounded hover:bg-accent hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-accent transition-all duration-300"
        >
          Diga Olá
        </Link>
      </div>
    </section>
  );
};

export default Contact;
