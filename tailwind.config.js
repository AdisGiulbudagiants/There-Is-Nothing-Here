/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto"],
    },
    fontSize: { sm: "0.75rem", lg: "1.375rem" },
    spacing: { 24: "1.5rem", 40: "2.5rem", 56: "3.5rem" },
    textColor: {
      white: "#fff",
    },
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      xxl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}
