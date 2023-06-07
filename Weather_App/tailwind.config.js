/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark': '10px -2px 20px rgb(0, 0, 0, 30%)'
      }
    },
  },
  plugins: [],
}