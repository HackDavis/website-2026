import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const DURATION = "2s"; // must match DURATION_MS = 6000

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

      keyframes: {
        "float-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },


        picture1: {
          /* front position (stable) */
          "0%, 52%": {
            transform:
              "translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)",
            zIndex: "50",
          },

          /* pull down */
          "60%": {
            transform:
              "translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)",
            zIndex: "50",
          },

          /* pause while fully down (safe moment to reorder) */
          "68%": {
            transform:
              "translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)",
            zIndex: "5",
          },

          /* move behind */
          "90%": {
            transform:
              "translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)",
            zIndex: "5",
          },

          /* settle — MUST equal start of next cycle */
          "100%": {
            transform:
              "translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)",
            zIndex: "5",
          },
        },


        picture2: {
          // B (left)
          "0%, 55%": {
            transform:
              "translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)",
            zIndex: "30",
          },
          // to A (front)
          "100%": {
            transform:
              "translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)",
            zIndex: "50",
          },
        },

        picture3: {
          // C (right)
          "0%, 55%": {
            transform:
              "translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)",
            zIndex: "20",
          },
          // to B (left)
          "100%": {
            transform:
              "translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)",
            zIndex: "30",
          },
        },

        picture4: {
          // D (back-left)
          "0%, 55%": {
            transform:
              "translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)",
            zIndex: "10",
          },
          // to C (right)
          "100%": {
            transform:
              "translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)",
            zIndex: "20",
          },
        },

        picture5: {
          // E (back-right)
          "0%, 55%": {
            transform:
              "translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)",
            zIndex: "5",
          },
          // to D (back-left)
          "100%": {
            transform:
              "translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)",
            zIndex: "10",
          },
        },
      },

      animation: {
        "float-bob": "float-bob 3s ease-in-out infinite",

        picture1: `picture1 ${DURATION} ease-in-out infinite`,
        picture2: `picture2 ${DURATION} ease-in-out infinite`,
        picture3: `picture3 ${DURATION} ease-in-out infinite`,
        picture4: `picture4 ${DURATION} ease-in-out infinite`,
        picture5: `picture5 ${DURATION} ease-in-out infinite`,
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".glass-pill": {
          display: "inline-flex",
          alignItems: "center",
          gap: "2%",
          height: "10%",
          padding: "2% 3% 2.5%",
          borderRadius: "99em",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow:
            "inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 10%), transparent), inset 1.7px 2.8px 0px -2.1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.7px -1.7px 0px -2.1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2.6px -7px 1px -6.2px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 12%), transparent), inset -1.5px 2.5px 0px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 0px 3px 4px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 1px 5px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 6px 16px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 8%), transparent)",
        },
        ".glass-bubble": {
          display: "inline-flex",
          alignItems: "center",
          gap: "2%",
          height: "10%",
          padding: "2% 3% 2.5%",
          borderRadius: "99em",
          "--bubble-x": "50%",
          "--bubble-y": "50%",
          "--bubble-c1": "rgba(255, 255, 255, 0.35)",
          "--bubble-c2": "rgba(255, 255, 255, 0.12)",
          background:
            "radial-gradient(circle at var(--bubble-x) var(--bubble-y), var(--bubble-c1) 0%, var(--bubble-c2) 70%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      });
    }),
  ],
} satisfies Config;
