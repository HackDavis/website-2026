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
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: '#E5EEF1',
        shadow: '#A6BFC7',
      },
      boxShadow: {
        card: '4px 4px 0 0 #A6BFC7',
      },

      keyframes: {
        'float-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        'slide-right': {
          '0%': { left: '0%' },
          '75%': { left: '70%' },
          '100%': {
            left: 'unset',
            right: '0%',
          },
        },

        picture1: {
          // front (A) - stable
          '0%, 40%, 100%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },

          // pull down (still front)
          '52%': {
            transform:
              'translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)',
            zIndex: '50',
          },

          // safe moment to drop behind
          '58%': {
            transform:
              'translate(-50%, -50%) translate(0%, 105%) rotate(0deg) scale(0.98)',
            zIndex: '5',
          },

          // behind (E)
          '72%': {
            transform:
              'translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)',
            zIndex: '5',
          },

          // come back toward front (still low z while passing under)
          '86%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '5',
          },

          // regain front at end (matches 0%)
          '92%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },
        },

        picture2: {
          // B (left)
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)',
            zIndex: '30',
          },
          // to A (front)
          '100%': {
            transform:
              'translate(-50%, -50%) translate(0%, 0%) rotate(0deg) scale(1)',
            zIndex: '50',
          },
        },

        picture3: {
          // C (right)
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)',
            zIndex: '20',
          },
          // to B (left)
          '100%': {
            transform:
              'translate(-50%, -50%) translate(-32%, 6%) rotate(-14deg) scale(0.95)',
            zIndex: '30',
          },
        },

        picture4: {
          // D (back-left)
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)',
            zIndex: '10',
          },
          // to C (right)
          '100%': {
            transform:
              'translate(-50%, -50%) translate(32%, 6%) rotate(14deg) scale(0.95)',
            zIndex: '20',
          },
        },

        picture5: {
          // E (back-right)
          '0%, 55%': {
            transform:
              'translate(-50%, -50%) translate(18%, -10%) rotate(8deg) scale(0.92)',
            zIndex: '5',
          },
          // to D (back-left)
          '100%': {
            transform:
              'translate(-50%, -50%) translate(-18%, -10%) rotate(-8deg) scale(0.92)',
            zIndex: '10',
          },
        },
      },

      animation: {
        'float-bob': 'float-bob 3s ease-in-out infinite',
        'slide-right': 'slide-right 300ms linear forwards',

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
        '.glass-pill': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2%',
          height: '10%',
          padding: '2% 3% 2.5%',
          borderRadius: '99em',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          // WebkitBackdropFilter: 'blur(10px)',
          boxShadow:
            'inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 10%), transparent 70%), inset 1.7px 2.8px 2px -2.1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 90%), transparent 70%), inset -1.5px 2.5px 2px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent 70%), inset 0px 3px 6px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent 70%)',
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
          boxShadow:
            'inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 6%), transparent 75%), inset 1.4px 2.2px 2px -2px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 60%), transparent 75%), inset -1px 1.6px 2px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%), inset 0px 2px 4px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent 80%)',
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
