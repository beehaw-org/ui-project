/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '',
          dark: '#212020',
        },
        secondary: {
          DEFAULT: '',
          dark: '#2d2d2d',
        },
        tertiary: {
          DEFAULT: '',
          dark: '#212020',
        },
      },
      fontSize: {
        16: '1rem',
        24: '1.5rem',
        32: '2rem',
        40: '2.5rem',
        48: '3rem',
        56: '3.5rem',
        64: '4rem',
      },
    },
  },
  plugins: [],
};
