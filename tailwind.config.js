// tailwind.config.js
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '720px',
          md: '720px',
          lg: '1140px',
          xl: '1720px',
          '2xl': '1720px',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#19191C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#7E818B',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
