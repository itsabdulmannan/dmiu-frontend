/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#353372",
        secondary: "#f29349",
        fadeBg: "#f7f7f7",
      },
      colors: {
        primaryText: "#353372",
        secondaryText: "#f29349",
        darkText: "#212529",
      },
      boxShadow: {
        primaryBoxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "20px 30px", 
      },

    },
  },
  plugins: [],
};
