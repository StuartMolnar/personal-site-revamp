/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      objectPosition: {
        'top': 'top',
      },
      screens: {
        'customHeroLogo': '1950px',
        'xl': '1350px',
        'super-sm': '315px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'body': '14px',
        'header': '18px',
        'title': '30px',
        'hero': '48px',

      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 600,
        'heavy': 700,
      },
      colors: {
        white: '#F2F2F2',
        red: '#953A1D',
        black: '#222222',
        gray: '#CCCCCC',
      },
    },
  },
  plugins: [],
}
