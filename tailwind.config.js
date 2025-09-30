/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        defaultColor: "#888",
        activeColor: "#f00",
        background: {
          light: "#ffffff",
          dark: "#333333",
        },
        text: {
          light: "#333333",
          dark: "#ffffff",
        },
      },
    },
    font: "sans-serif",
  },
  plugins: [],
};
