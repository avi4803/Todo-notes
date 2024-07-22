/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnight: '#1e2b58',
        indi: '#BBAFF2',
      midnight2: '#6e70c5',
      },
      screens: {
        'sm': '640px', // Custom value for 'sm'
        'md': '768px', // Custom value for 'md'
      },

    },
  },
  plugins: [],
}