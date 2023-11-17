/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": "#222",
        "white": "#f8f8fc"
      }
    },
  },
  plugins: [],
}

