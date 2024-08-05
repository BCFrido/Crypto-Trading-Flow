/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "bg-icon": "url('./assets/ctf.png"
    },
    screens: {
      xs: "390px",
      sm: "768px",
      md: "1061px",
      lg:"1601px",
    },
  },
  plugins: [require('@tailwindcss/typography')],
}