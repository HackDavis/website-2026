import type { Config } from 'tailwindcss';

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
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        montserrat: 'var(--font-montserrat)',
        jakarta: 'var(--font-jakarta)',
      },

      keyframes: {
        picture1: {
          // hold front
          '0%, 45%': { transform: 'translateY(0%)', zIndex: '5' },

          // ease into spread (no sudden jump at 55)
          '55%': { transform: 'translateY(40%)', zIndex: '5' },
          '75%': { transform: 'translateY(40%)', zIndex: '5' },

          // smooth drop out (instead of 83.9 -> 84 pop)
          '84%': { transform: 'translateY(150%)', zIndex: '5' },

          // once it's fully off-screen, send to back
          '85%': { transform: 'translateY(150%)', zIndex: '0' },

          // come back as the back card
          '92%': { transform: 'translateY(0%)', zIndex: '0' },
          '100%': { transform: 'translateY(0%)', zIndex: '0' },
        },

        picture2: {
          // hold
          '0%, 45%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },

          // spread (ease)
          '55%': {
            transform: 'translateX(-70%) translateY(-20%) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          '82%': {
            transform: 'translateX(-70%) translateY(-20%) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },

          // ease into front pose
          '92%': {
            transform: 'translateX(-20%) translateY(-6%) rotate(-8deg)',
            zIndex: '4',
            backgroundColor: '#C9D2DA',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
        },

        picture3: {
          '0%, 45%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '3',
          },

          '55%': {
            transform: 'translateX(10%) translateY(-50%) rotate(3deg)',
            zIndex: '3',
          },
          '84%': {
            transform: 'translateX(10%) translateY(-50%) rotate(3deg)',
            zIndex: '3',
          },

          // ease toward picture2 pose (avoid snap near 97)
          '93%': {
            transform: 'translateX(-10%) translateY(-18%) rotate(-4deg)',
            zIndex: '3',
          },
          '100%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '3',
          },
        },

        picture4: {
          '0%, 45%': {
            transform: 'translateX(30%) translateY(-15%) rotate(20deg)',
            zIndex: '2',
          },

          '55%': {
            transform: 'translateX(70%) translateY(-15%) rotate(10deg)',
            zIndex: '2',
          },
          '85%': {
            transform: 'translateX(70%) translateY(-15%) rotate(10deg)',
            zIndex: '2',
          },

          // ease toward picture3 pose
          '94%': {
            transform: 'translateX(18%) translateY(-22%) rotate(8deg)',
            zIndex: '2',
          },
          '100%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '2',
          },
        },

        picture5: {
          '0%, 85%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '1',
          },

          // ease toward picture4 pose (avoid last-frame snap)
          '94%': {
            transform: 'translateX(18%) translateY(-10%) rotate(12deg)',
            zIndex: '1',
          },
          '100%': {
            transform: 'translateX(30%) translateY(-15%) rotate(20deg)',
            zIndex: '1',
          },
        },
      },

      animation: {
        // 6s total, smooth easing, loops forever
        picture1: 'picture1 6000ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
        picture2: 'picture2 6000ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
        picture3: 'picture3 6000ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
        picture4: 'picture4 6000ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
        picture5: 'picture5 6000ms cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;