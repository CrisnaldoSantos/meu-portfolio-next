import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/structure/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crisnaldocarvalho.com.br"),
  title: {
    default: "Crisnaldo Carvalho | Desenvolvedor Full-Stack",
    template: "%s | Crisnaldo Carvalho",
  },
  description:
    "Portfólio de Crisnaldo Carvalho, desenvolvedor full-stack especialista em JavaScript/TypeScript, React, Next.js e Node.js. Criando soluções web modernas e eficientes.",
  keywords: [
    "Crisnaldo Carvalho",
    "desenvolvedor full-stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Crisnaldo Carvalho" }],
  creator: "Crisnaldo Carvalho",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.crisnaldocarvalho.com.br",
    title: "Crisnaldo Carvalho | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Crisnaldo Carvalho, desenvolvedor full-stack especialista em JavaScript/TypeScript, React, Next.js e Node.js.",
    siteName: "Crisnaldo Carvalho Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crisnaldo Carvalho - Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crisnaldo Carvalho | Desenvolvedor Full-Stack",
    description:
      "Portfólio de Crisnaldo Carvalho, desenvolvedor full-stack especialista em JavaScript/TypeScript.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
