/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '700px', // Custom value for 'sm'
        'md': '768px', // Custom value for 'md'
      },

    },
  },
  plugins: [],
}