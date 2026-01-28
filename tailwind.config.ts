import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
          '100%': { left: 'unset', right: '0%' },
        },
      },
      animation: {
        'float-bob': 'float-bob 3s ease-in-out infinite',
        'slide-right': 'slide-right 500ms linear forwards',
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
            'inset 0 0 0 1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 10%), transparent), inset 1.7px 2.8px 0px -2.1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.7px -1.7px 0px -2.1px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2.6px -7px 1px -6.2px color-mix(in srgb, var(--glass-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 12%), transparent), inset -1.5px 2.5px 0px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 0px 3px 4px -2px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 1px 5px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 6px 16px 0px color-mix(in srgb, var(--glass-dark) calc(var(--glass-reflex-dark) * 8%), transparent)',
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
