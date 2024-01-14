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
        '2sm': '550px',
        '3sm': '400px',
        '4sm': '325px',
        '3xl': '1850px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'body-sm': '14px',
        'body': '16px',
        'body-lg': '18px',
        'title-lg': '36px',
        'title': '30px',
        'title-sm': '24px',
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
