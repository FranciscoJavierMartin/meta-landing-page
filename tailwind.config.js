/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        meta: {
          lighter: '#3e76b3',
          light: '#3d7cce',
          DEFAULT: '#1d65c1',
          dark: '#418af7',
        },
        secondary: {
          DEFAULT: '#344854',
        },
      },
      maxWidth: {
        '8xl': '94rem',
      },
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      text: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
