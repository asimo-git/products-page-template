import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#263750",
        accentHover: "#97ce4c",
        cardBtn: "#00ff9d",
        activeBtn: "#88e23b",
      },
    },
  },
  plugins: [],
} satisfies Config;
