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
        'navbar-dsk': '20px',
        'hero-dsk': '61px',
        'hero-sub-dsk': '25px',
        'btn-dsk': '16px',
        'base-dsk': '16px',
        'h1-dsk': '49px',
        'h2-dsk': '31px',
        'h3-dsk': '25px',
        'header-sub-dsk': '20px',

        'navbar': '20px',
        'hero': '25px',
        'hero-sub': '16px',
        'btn': '16px',
        'base': '16px',
        'h1': '25px',
        'h2': '25px',
        'h3': '20px',
        'header-sub': '16px',
        'copyright': '13px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 600,
        'heavy': 700,
      },
      colors: {
        gold: '#D5B76E',
      },
      boxShadow: {
        'custom': '0px 2px 25px 1px rgba(0, 0, 0, 0.05)'
      },      
      maxWidth: {
        '112': '28rem', /* 448px */
      },
      animation: {
        'slide-in': 'slide-in 0.5s forwards',
        'slide-out': 'slide-out 0.5s forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        'slide-down': {
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '500px' }
        },
        },
      },
    },
  },
  plugins: [],
}
