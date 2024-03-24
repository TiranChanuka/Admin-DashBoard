/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "30px": "30px",
        "40px": "40px",
        "25px": "25px",
        "17px": "17px",
        "14px": "14px",
        "13px": "13px",
      },
      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },
      colors: {
        primary: "#101010",
        textPrimary: "#FFFFFF",
        green: "#31BA96",
        iconBlue: "#32A7E2",
        iconPurple: "#B548C6",
        iconOrange: "#FF8700",
        iconRed: "#DC3434",
        iconGreen: "#4BA83D",
      },
    },
  },
  plugins: [],
};
