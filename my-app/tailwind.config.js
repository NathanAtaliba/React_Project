/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
    theme: {
      extend: {
        fontFamily:{
          sans: ['Inter','sans-serif']
        },
        backgroundImage: {
          'wats': "url('/public/fundo.jpg')",
        }
      }
  },
  plugins: [],
}

