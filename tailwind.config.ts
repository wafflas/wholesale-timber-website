import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#AC8D5B",
        secondary: "#2A2520",
      },
      fontFamily: {
        "golos-text": ["var(--font-golos-text)", "system-ui", "sans-serif"],
        hero: ['"Post No Bills Jaffna"', "sans-serif"],
      },
      letterSpacing: {
        hero: "0.07rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
