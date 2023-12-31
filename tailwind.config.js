/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#00d2ff',
        'my-dark-blue': '#009CBF',
        'my-shadow-blue': '#00d2ff77',
        'my-green': '#06BA78',
        'my-dark-gray': '#808182',
      },  
      dropShadow: {
        'glow': '0 0 var(--glowing, 8px) var(--glowing-color, rgba(255, 255, 255, 0.3))',
        'glow-blue': '0 0 var(--glowing, 8px) #00d2ff77',
      },
      fontFamily: {
        'trip': ['Trip Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/img/noise.png')",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out-left': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
            letterSpacing: '0.0em',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-30px)',
            letterSpacing: '-0.1em',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-out-left': 'fade-out-left 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.8s ease-out',
      }
    },
  },
  plugins: [],
}
