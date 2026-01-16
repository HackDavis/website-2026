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
        secondary: "#E5EEF1",
        shadow: "#A6BFC7",
      },
      boxShadow: {
        card: "4px 4px 0 0 #A6BFC7",
      },
    },
  },
  plugins: [],
} satisfies Config;
