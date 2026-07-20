import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        foreground: "#FAFAFA",
        card: "#111111",
        border: "#27272A",
        muted: "#A1A1AA",
        accent: "#3B82F6",
      },
      borderRadius: {
        xl: "20px",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

