import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        darkHomeBg:'#0f0f0f',
        darkText:"#d1d5db",
        tubeRed:"#f00",
        darkGray:"#2d2d2d",

        // Light Theme
        lightHomeBg:'#fff',
        lightText:'#212121'
      },
      screens:{
        superSmall: '591px'
      }
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
