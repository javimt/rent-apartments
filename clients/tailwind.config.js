/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#727c73"
      },
      backgroundImage:{
        banner: "url('./assets/imagenPortada1.jpeg')",
        banner2:"url('./assets/imagenPortada2.jpeg')"
      },
      boxShadow:{
        light:"0px 4px 30px rgba(0, 0, 0, 0.08)"
      },
      fontFamily:{
        quicksand:"'Quicksand', sans-serif"
      }
    },
  },
  plugins: [],
}