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
        picture1_laptop: {
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
          '80%': {
            transform: 'translateY(125px)',
            zIndex: '5',
          },
          // anticipation position
          '83.9%': {
            transform: 'translateY(425px)',
            zIndex: '5',
          },
          // anticipation position
          '84%': {
            transform: 'translateY(425px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '89%': {
            transform: 'translateY(25px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '100%': {
            transform: 'translateY(25px)',
            zIndex: '0',
          },
        },
        picture2_laptop: {
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
        picture3_laptop: {
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
        picture4_laptop: {
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
        picture5_laptop: {
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
        picture1_medium: {
          // picture 1 position
          '0%': {
            transform: 'translateY(30px)',
            zIndex: '5',
          },
          // picture 1 position
          '50%': {
            transform: 'translateY(30px)',
            zIndex: '5',
          },
          // spread position
          '55%': {
            transform: 'translateY(85px)',
            zIndex: '5',
          },
          // spread position
          '80%': {
            transform: 'translateY(85px)',
            zIndex: '5',
          },
          // anticipation position
          '83.9%': {
            transform: 'translateY(225px)',
            zIndex: '5',
          },
          // anticipation position
          '84%': {
            transform: 'translateY(225px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '89%': {
            transform: 'translateY(30px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '100%': {
            transform: 'translateY(30px)',
            zIndex: '0',
          },
        },
        picture2_medium: {
          // picture 2 position
          '0%': {
            transform: 'translateX(-70px) translateY(-10px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 2 position
          '50%': {
            transform: 'translateX(-70px) translateY(-10px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '55%': {
            transform: 'translateX(-100px) translateY(-35px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '90%': {
            transform: 'translateX(-100px) translateY(-35px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 1 position
          '95%': {
            transform: 'translateX(0px) translateY(30px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
          // picture 1 position
          '100%': {
            transform: 'translateX(0px) translateY(30px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
        },
        picture3_medium: {
          // picture 3 position
          '0%': {
            transform: 'translateX(10px) translateY(-45px) rotate(10deg)',
            zIndex: '3',
          },
          // picture 3 position
          '50%': {
            transform: 'translateX(10px) translateY(-45px) rotate(10deg)',
            zIndex: '3',
          },
          // spread position
          '55%': {
            transform: 'translateX(15px) translateY(-85px) rotate(3deg)',
            zIndex: '3',
          },
          // spread position
          '92%': {
            transform: 'translateX(15px) translateY(-85px) rotate(3deg)',
            zIndex: '3',
          },
          // picture 2 position
          '97%': {
            transform: 'translateX(-70px) translateY(-10px) rotate(-15deg)',
            zIndex: '3',
          },
          // picture 2 position
          '100%': {
            transform: 'translateX(-70px) translateY(-10px) rotate(-15deg)',
            zIndex: '3',
          },
        },
        picture4_medium: {
          // picture 4 position
          '0%': {
            transform: 'translateX(60px) translateY(0px) rotate(20deg)',
            zIndex: '2',
          },
          // picture 4 position
          '50%': {
            transform: 'translateX(60px) translateY(0px) rotate(20deg)',
            zIndex: '2',
          },
          // spread position
          '55%': {
            transform: 'translateX(100px) translateY(-40px) rotate(10deg)',
            zIndex: '2',
          },
          // spread position
          '93%': {
            transform: 'translateX(100px) translateY(-40px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '98%': {
            transform: 'translateX(10px) translateY(-45px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '100%': {
            transform: 'translateX(10px) translateY(-45px) rotate(10deg)',
            zIndex: '2',
          },
        },
        picture5_medium: {
          // picture 5 position
          '0%': {
            transform: 'translateX(0px) translateY(30px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 5 position
          '95%': {
            transform: 'translateX(0px) translateY(30px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 4 position
          '100%': {
            transform: 'translateX(60px) translateY(0px) rotate(20deg)',
            zIndex: '1',
          },
        },
        picture1_mobile: {
          // picture 1 position
          '0%': {
            transform: 'translateY(20px)',
            zIndex: '5',
          },
          // picture 1 position
          '50%': {
            transform: 'translateY(20px)',
            zIndex: '5',
          },
          // spread position
          '55%': {
            transform: 'translateY(55px)',
            zIndex: '5',
          },
          // spread position
          '80%': {
            transform: 'translateY(55px)',
            zIndex: '5',
          },
          // anticipation position
          '83.9%': {
            transform: 'translateY(140px)',
            zIndex: '5',
          },
          // anticipation position
          '84%': {
            transform: 'translateY(140px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '89%': {
            transform: 'translateY(20px)',
            zIndex: '0',
          },
          // picture 5 poistion
          '100%': {
            transform: 'translateY(20px)',
            zIndex: '0',
          },
        },
        picture2_mobile: {
          // picture 2 position
          '0%': {
            transform: 'translateX(-40px) translateY(-15px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 2 position
          '50%': {
            transform: 'translateX(-40px) translateY(-15px) rotate(-15deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '55%': {
            transform: 'translateX(-60px) translateY(-20px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // spread position
          '90%': {
            transform: 'translateX(-60px) translateY(-20px) rotate(-5deg)',
            zIndex: '4',
            backgroundColor: '#BDC7D0',
          },
          // picture 1 position
          '95%': {
            transform: 'translateX(0px) translateY(20px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
          // picture 1 position
          '100%': {
            transform: 'translateX(0px) translateY(20px) rotate(0deg)',
            zIndex: '4',
            backgroundColor: '#DCE3EA',
          },
        },
        picture3_mobile: {
          // picture 3 position
          '0%': {
            transform: 'translateX(5px) translateY(-35px) rotate(10deg)',
            zIndex: '3',
          },
          // picture 3 position
          '50%': {
            transform: 'translateX(5px) translateY(-35px) rotate(10deg)',
            zIndex: '3',
          },
          // spread position
          '55%': {
            transform: 'translateX(15px) translateY(-50px) rotate(3deg)',
            zIndex: '3',
          },
          // spread position
          '92%': {
            transform: 'translateX(15px) translateY(-50px) rotate(3deg)',
            zIndex: '3',
          },
          // picture 2 position
          '97%': {
            transform: 'translateX(-40px) translateY(-15px) rotate(-15deg)',
            zIndex: '3',
          },
          // picture 2 position
          '100%': {
            transform: 'translateX(-40px) translateY(-15px) rotate(-15deg)',
            zIndex: '3',
          },
        },
        picture4_mobile: {
          // picture 4 position
          '0%': {
            transform: 'translateX(40px) translateY(0px) rotate(20deg)',
            zIndex: '2',
          },
          // picture 4 position
          '50%': {
            transform: 'translateX(40px) translateY(0px) rotate(20deg)',
            zIndex: '2',
          },
          // spread position
          '55%': {
            transform: 'translateX(60px) translateY(-10px) rotate(10deg)',
            zIndex: '2',
          },
          // spread position
          '93%': {
            transform: 'translateX(60px) translateY(-10px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '98%': {
            transform: 'translateX(5px) translateY(-35px) rotate(10deg)',
            zIndex: '2',
          },
          // picture 3 position
          '100%': {
            transform: 'translateX(5px) translateY(-35px) rotate(10deg)',
            zIndex: '2',
          },
        },
        picture5_mobile: {
          // picture 5 position
          '0%': {
            transform: 'translateX(0px) translateY(20px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 5 position
          '95%': {
            transform: 'translateX(0px) translateY(20px) rotate(0deg)',
            zIndex: '1',
          },
          // picture 4 position
          '100%': {
            transform: 'translateX(40px) translateY(0px) rotate(20deg)',
            zIndex: '1',
          },
        },
      },
      animation: {
        picture1_laptop: 'picture1_laptop 10000ms forwards',
        picture2_laptop: 'picture2_laptop 10000ms forwards',
        picture3_laptop: 'picture3_laptop 10000ms forwards',
        picture4_laptop: 'picture4_laptop 10000ms forwards',
        picture5_laptop: 'picture5_laptop 10000ms forwards',
        picture1_mobile: 'picture1_mobile 10000ms forwards',
        picture2_mobile: 'picture2_mobile 10000ms forwards',
        picture3_mobile: 'picture3_mobile 10000ms forwards',
        picture4_mobile: 'picture4_mobile 10000ms forwards',
        picture5_mobile: 'picture5_mobile 10000ms forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
