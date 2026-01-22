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
        picture1: {
          '0%': { transform: 'translateY(0px)', zIndex: '5' },
          /*'1%': { transform: 'translateY(2px)', zIndex: '5' },
          '2%': { transform: 'translateY(7px)', zIndex: '5' },
          '3%': { transform: 'translateY(15px)', zIndex: '5' },
          '4%': { transform: 'translateY(30px)', zIndex: '5' },
          '5%': { transform: 'translateY(60px)', zIndex: '5' },
          '6%': { transform: 'translateY(75px)', zIndex: '5' },
          '7%': { transform: 'translateY(88px)', zIndex: '5' },
          '8%': { transform: 'translateY(95px)', zIndex: '5' },
          '9%': { transform: 'translateY(98px)', zIndex: '5' },*/
          '50%': { transform: 'translateY(0px)', zIndex: '5' },
          '55%': { transform: 'translateY(100px)', zIndex: '5' },
          '85%': { transform: 'translateY(100px)', zIndex: '5' },//here
          '90%': { transform: 'translateY(400px)', zIndex: '0' },
          '95%': { transform: 'translateY(-50px)', zIndex: '0' },
          /*'91%': { transform: 'translateY(120px)', zIndex: '0' },
          '92%': { transform: 'translateY(105px)', zIndex: '0' },
          '93%': { transform: 'translateY(50px)', zIndex: '0' },
          '94%': { transform: 'translateY(-5px)', zIndex: '0' }
          '95%': { transform: 'translateY(-20px)', zIndex: '0' }, LMAOOO I DIDNT NEED THIS
          '96%': { transform: 'translateY(-69px)', zIndex: '0' }, //heh
          '97%': { transform: 'translateY(-84px)', zIndex: '0' },
          '98%': { transform: 'translateY(-92px)', zIndex: '0' },
          '99%': { transform: 'translateY(-97px)', zIndex: '0' },*/
          '100%': { transform: 'translateY(0px)', zIndex: '0' },
        },
        picture2: { // -15, -100, -40
          '0%': { transform: 'translateX(-100px) translateY(-40px) rotate(-15deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '50%': { transform: 'translateX(-100px) translateY(-40px) rotate(-15deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '55%': { transform: 'translateX(-160px) translateY(-100px) rotate(-5deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '95%': { transform: 'translateX(-160px) translateY(-100px) rotate(-5deg)', zIndex: '4', backgroundColor: '#BDC7D0' },
          '100%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)', zIndex: '4', backgroundColor: '#DCE3EA' },
        },
        /*picture2: {
          '0%': { transform: 'translateY(0px) translateX(0px)', zIndex: '4' }, //rotate-[345deg] translate-x-[-100px] translate-y-[-40px]
          '50%': { transform: 'translateY(0px) translateX(0px)', zIndex: '4' }, // CHNAGE BACKGROUND IMG
          '60%': { transform: 'rotate(-10deg) translateX(-50px) translateY(-70px)', zIndex: '4' },
          '90%': { transform: 'rotate(-10deg) translateX(-50px) translateY(-70px)', zIndex: '4' },
          '95%': { transform: 'rotate(-5deg) translateX(-150px) translateY(-140px)', zIndex: '5' },
          '100%': { transform: 'rotate(15deg) translateX(100px) translateY(40px)', zIndex: '5' },
        },*/
        picture3: { // 5, 0, -100
          '0%': { transform: 'translateX(20px) translateY(-100px) rotate(10deg)', zIndex: '3' },
          '50%': { transform: 'translateX(20px) translateY(-100px) rotate(10deg)', zIndex: '3' },
          '55%': { transform: 'translateX(20px) translateY(-190px) rotate(3deg)', zIndex: '3' },
          '95%': { transform: 'translateX(20px) translateY(-190px) rotate(3deg)', zIndex: '3' },
          '100%': { transform: 'translateX(-100px) translateY(-40px) rotate(-15deg)', zIndex: '3' },
        },
        picture4: { // -20, 100, -30
          '0%': { transform: 'translateX(100px) translateY(-30px) rotate(20deg)', zIndex: '2' },
          '50%': { transform: 'translateX(100px) translateY(-30px) rotate(20deg)', zIndex: '2' },
          '55%': { transform: 'translateX(150px) translateY(-80px) rotate(10deg)', zIndex: '2' },
          '95%': { transform: 'translateX(150px) translateY(-80px) rotate(10deg)', zIndex: '2' },
          '100%': { transform: 'translateX(20px) translateY(-100px) rotate(10deg)', zIndex: '2' },
        },
        picture5: { // 0, 0, -50 applies from left to right
          '0%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)', zIndex: '1' },
          '95%': { transform: 'translateX(0px) translateY(0px) rotate(0deg)', zIndex: '1' },
          '100%': { transform: 'translateX(100px) translateY(-30px) rotate(20deg)', zIndex: '1' },
        },
      },
      animation: {
        picture1: 'picture1 15000ms infinite',
        picture2: 'picture2 15000ms infinite',
        picture3: 'picture3 15000ms infinite',
        picture4: 'picture4 15000ms infinite',
        picture5: 'picture5 15000ms infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
