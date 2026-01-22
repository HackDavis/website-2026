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
        /*picture1: { //ORIGINALLL
          '0%': { transform: 'translateY(25px)', zIndex: '5' },
          '50%': { transform: 'translateY(25px)', zIndex: '5' },
          '55%': { transform: 'translateY(125px)', zIndex: '5' },
          '85%': { transform: 'translateY(125px)', zIndex: '5' },//here
          '90%': { transform: 'translateY(425px)', zIndex: '0' },
          '95%': { transform: 'translateY(-25px)', zIndex: '0' },
          '100%': { transform: 'translateY(25px)', zIndex: '0' },
        },
        picture2: { // -15, -100, -40
          '0%': { transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '50%': { transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '55%': { transform: 'translateX(-160px) translateY(-75px) rotate(-5deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '95%': { transform: 'translateX(-160px) translateY(-75px) rotate(-5deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '100%': { transform: 'translateX(0px) translateY(25px) rotate(0deg)', zIndex: '4', backgroundColor: '#DCE3EA' },
        },
        picture3: { // 5, 0, -100
          '0%': { transform: 'translateX(20px) translateY(-75px) rotate(10deg)', zIndex: '3' },
          '50%': { transform: 'translateX(20px) translateY(-75px) rotate(10deg)', zIndex: '3' },
          '55%': { transform: 'translateX(20px) translateY(-165px) rotate(3deg)', zIndex: '3' },
          '95%': { transform: 'translateX(20px) translateY(-165px) rotate(3deg)', zIndex: '3' },
          '100%': { transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)', zIndex: '3' },
        },
        picture4: { // -20, 100, -30
          '0%': { transform: 'translateX(100px) translateY(-5px) rotate(20deg)', zIndex: '2' },
          '50%': { transform: 'translateX(100px) translateY(-5px) rotate(20deg)', zIndex: '2' },
          '55%': { transform: 'translateX(150px) translateY(-55px) rotate(10deg)', zIndex: '2' },
          '95%': { transform: 'translateX(150px) translateY(-55px) rotate(10deg)', zIndex: '2' },
          '100%': { transform: 'translateX(20px) translateY(-75px) rotate(10deg)', zIndex: '2' },
        },
        picture5: { // 0, 0, -50 applies from left to right
          '0%': { transform: 'translateX(0px) translateY(25px) rotate(0deg)', zIndex: '1' },
          '95%': { transform: 'translateX(0px) translateY(25px) rotate(0deg)', zIndex: '1' },
          '100%': { transform: 'translateX(100px) translateY(-5px) rotate(20deg)', zIndex: '1' },
        },*/
        picture1: {
          // picture 1 position
          '0%': {
            transform: 'translateY(25px)',
            zIndex: '5',
          },
          // picture 1 position
          '50%': {
            transform: 'translateY(25px)',
            zIndex: '5',
          },
          // spread position
          '55%': {
            transform: 'translateY(125px)',
            zIndex: '5',
          },
          // spread position
          '82%': {
            transform: 'translateY(125px)',
            zIndex: '5',
          },
          // anticipation position
          '85.9%': {
            transform: 'translateY(425px)',
            zIndex: '5',
          },
          // anticipation position
          '86%': {
            transform: 'translateY(425px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '91%': {
            transform: 'translateY(25px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '100%': {
            transform: 'translateY(25px)',
            zIndex: '0',
          },
        },
        picture2: {
          // picture 2 position
          '0%': {
            transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 2 position
          '50%': {
            transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '55%': {
            transform: 'translateX(-170px) translateY(-75px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '90%': {
            transform: 'translateX(-170px) translateY(-75px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 1 position
          '95%': {
            transform: 'translateX(0px) translateY(25px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
          // picture 1 position
          '100%': {
            transform: 'translateX(0px) translateY(25px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
        },
        picture3: {
          // picture 3 position
          '0%': {
            transform: 'translateX(20px) translateY(-75px) rotate(10deg)',
            zIndex: '3',
          },
          // picture 3 position
          '50%': {
            transform: 'translateX(20px) translateY(-75px) rotate(10deg)',
            zIndex: '3',
          },
          // spread position
          '55%': {
            transform: 'translateX(20px) translateY(-165px) rotate(3deg)',
            zIndex: '3',
          },
          // spread position
          '92%': {
            transform: 'translateX(20px) translateY(-165px) rotate(3deg)',
            zIndex: '3',
          },
          // picture 2 position
          '97%': {
            transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)',
            zIndex: '3',
          },
          // picture 2 position
          '100%': {
            transform: 'translateX(-100px) translateY(-15px) rotate(-15deg)',
            zIndex: '3',
          },
        },
        picture4: {
          // picture 4 position
          '0%': {
            transform: 'translateX(100px) translateY(-5px) rotate(20deg)',
            zIndex: '2',
          },
          // picture 4 position
          '50%': {
            transform: 'translateX(100px) translateY(-5px) rotate(20deg)',
            zIndex: '2',
          },
          // spread position
          '55%': {
            transform: 'translateX(160px) translateY(-55px) rotate(10deg)',
            zIndex: '2',
          },
          // spread position
          '93%': {
            transform: 'translateX(160px) translateY(-55px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '98%': {
            transform: 'translateX(20px) translateY(-75px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '100%': {
            transform: 'translateX(20px) translateY(-75px) rotate(10deg)',
            zIndex: '2',
          },
        },
        picture5: {
          // picture 5 position
          '0%': {
            transform: 'translateX(0px) translateY(25px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 5 position
          '95%': {
            transform: 'translateX(0px) translateY(25px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 4 position
          '100%': {
            transform: 'translateX(100px) translateY(-5px) rotate(20deg)',
            zIndex: '1',
          },
        },
      },
      animation: {
        picture1: 'picture1 10000ms infinite',
        picture2: 'picture2 10000ms infinite',
        picture3: 'picture3 10000ms infinite',
        picture4: 'picture4 10000ms infinite',
        picture5: 'picture5 10000ms infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
