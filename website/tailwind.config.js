/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fb",
        text: "#0d0f16",
        primary: "#6771a3",
        accent: "#0A21C0",
        secondary: "#c7aba1"
      },
    },
  },
  plugins: [],
}