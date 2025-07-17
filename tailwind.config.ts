import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        slate: "#8892B0",
        "light-slate": "#A8B2D1",
        "lightest-slate": "#CCD6F6",
        white: "#E6F1FF",
        accent: "#64FFDA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
        blink: "blink 1s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
