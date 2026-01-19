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
      },
      keyframes: {
        enter1: {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(100px)' },
          '90%': { transform: 'translateY(500px)' },
          '100%': { transform: 'translateY(600px)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.05)' },
        },
      },
      animation: {
        enter1: 'enter1 10000ms ease-out infinite',
        fadeOut: 'fadeOut 300ms ease-in forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
