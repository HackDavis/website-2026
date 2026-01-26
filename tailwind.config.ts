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
          // picture 1 position
          '0%': {
            transform: 'translateY(0%)',
            zIndex: '5',
          },
          // picture 1 position
          '50%': {
            transform: 'translateY(0%)',
            zIndex: '5',
          },
          // spread position
          '55%': {
            transform: 'translateY(40%)',
            zIndex: '5',
          },
          // spread position
          '80%': {
            transform: 'translateY(40%)',
            zIndex: '5',
          },
          // anticipation position
          '83.9%': {
            transform: 'translateY(150%)',
            zIndex: '5',
          },
          // anticipation position
          '84%': {
            transform: 'translateY(150%)',
            zIndex: '0',
          },
          // picture 5 poistion
          '89%': {
            transform: 'translateY(0%)',
            zIndex: '0',
          },
          // picture 5 poistion
          '100%': {
            transform: 'translateY(0%)',
            zIndex: '0',
          },
        },
        picture2: {
          // picture 2 position
          '0%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 2 position
          '50%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '55%': {
            transform: 'translateX(-70%) translateY(-20%) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '90%': {
            transform: 'translateX(-70%) translateY(-20%) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 1 position
          '95%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
          // picture 1 position
          '100%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
        },
        picture3: {
          // picture 3 position
          '0%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '3',
          },
          // picture 3 position
          '50%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '3',
          },
          // spread position
          '55%': {
            transform: 'translateX(10%) translateY(-50%) rotate(3deg)',
            zIndex: '3',
          },
          // spread position
          '92%': {
            transform: 'translateX(10%) translateY(-50%) rotate(3deg)',
            zIndex: '3',
          },
          // picture 2 position
          '97%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '3',
          },
          // picture 2 position
          '100%': {
            transform: 'translateX(-30%) translateY(-10%) rotate(-15deg)',
            zIndex: '3',
          },
        },
        picture4: {
          // picture 4 position
          '0%': {
            transform: 'translateX(30%) translateY(-15%) rotate(20deg)',
            zIndex: '2',
          },
          // picture 4 position
          '50%': {
            transform: 'translateX(30%) translateY(-15%) rotate(20deg)',
            zIndex: '2',
          },
          // spread position
          '55%': {
            transform: 'translateX(70%) translateY(-15%) rotate(10deg)',
            zIndex: '2',
          },
          // spread position
          '93%': {
            transform: 'translateX(70%) translateY(-15%) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '98%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '100%': {
            transform: 'translateX(5%) translateY(-25%) rotate(10deg)',
            zIndex: '2',
          },
        },
        picture5: {
          // picture 5 position
          '0%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '1',
          },
          // picture 5 position
          '95%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
            zIndex: '1',
          },
          // picture 4 position
          '100%': {
            transform: 'translateX(30%) translateY(-15%) rotate(20deg)',
            zIndex: '1',
          },
        },
      },
      animation: {
        picture1: 'picture1 10000ms forwards',
        picture2: 'picture2 10000ms forwards',
        picture3: 'picture3 10000ms forwards',
        picture4: 'picture4 10000ms forwards',
        picture5: 'picture5 10000ms forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
