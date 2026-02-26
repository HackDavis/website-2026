import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const DURATION = '3s';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'arial'],
        montserrat: ['var(--font-montserrat)', 'arial'],
        jakarta: ['var(--font-jakarta)', 'arial'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: '#E5EEF1',
        shadow: '#A6BFC7',
      },
      boxShadow: {
        card: '4px 4px 0 0 #A6BFC7',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkpurple: 'var(--background-dark-purple)',
      },

      keyframes: {
        // existing
        'float-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        'slide-right': {
          '0%': { left: '0%' },
          '75%': { left: '70%' },
          '100%': { left: 'unset', right: '0%' },
        },

        // =========================
        // ✅ Infinite sponsor marquee
        // Track must contain TWO identical copies of content
        // and we animate by -50% for seamless looping.
        // =========================
        'sponsor-marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'sponsor-marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },

        // existing picture stack
        picture1: {
          '0%, 40%, 100%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },
          '52%': {
            transform:
              'translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)',
            zIndex: '50',
          },
          '58%': {
            transform:
              'translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)',
            zIndex: '5',
          },
          '72%': {
            transform:
              'translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)',
            zIndex: '5',
          },
          '86%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '5',
          },
          '92%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },
        },

        picture2: {
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)',
            zIndex: '30',
          },
          '100%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },
        },

        picture3: {
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)',
            zIndex: '20',
          },
          '100%': {
            transform:
              'translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)',
            zIndex: '30',
          },
        },

        picture4: {
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)',
            zIndex: '10',
          },
          '100%': {
            transform:
              'translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)',
            zIndex: '20',
          },
        },

        picture5: {
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)',
            zIndex: '5',
          },
          '100%': {
            transform:
              'translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)',
            zIndex: '10',
          },
        },
      },

      animation: {
        // existing
        'float-bob': 'float-bob 3s ease-in-out infinite',
        'slide-right': 'slide-right 300ms linear forwards',

        picture1: `picture1 ${DURATION} ease-in-out infinite`,
        picture2: `picture2 ${DURATION} ease-in-out infinite`,
        picture3: `picture3 ${DURATION} ease-in-out infinite`,
        picture4: `picture4 ${DURATION} ease-in-out infinite`,
        picture5: `picture5 ${DURATION} ease-in-out infinite`,

        // ✅ New marquee utilities
        // adjust durations to change speed
        'sponsor-left': 'sponsor-marquee-left 100s linear infinite',
        'sponsor-right': 'sponsor-marquee-right 89s linear infinite',
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.glass-pill': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3% 2.5%',
          borderRadius: '99em',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow:
            'inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 6%), transparent 75%), inset 1.4px 2.2px 2px -2px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 60%), transparent 75%), inset -1px 1.6px 2px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%), inset 0px 2px 4px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%)',
        },

        '.header-navbar': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3% 2.5%',
          borderRadius: '99em',
          backgroundColor: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(12px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        },

        '.glass-bubble': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3% 2.5%',
          borderRadius: '99em',
          '--bubble-x': '50%',
          '--bubble-y': '50%',
          '--bubble-c1': 'rgba(255, 255, 255, 0.35)',
          '--bubble-c2': 'rgba(255, 255, 255, 0.12)',
          background:
            'radial-gradient(circle at var(--bubble-x) var(--bubble-y), var(--bubble-c1) 0%, var(--bubble-c2) 70%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        },
      });
    }),
  ],
} satisfies Config;
