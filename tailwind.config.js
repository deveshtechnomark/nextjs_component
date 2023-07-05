module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02B89D",
        pureWhite: "#FFF",
        errorColor: "#F8D7DA",
        darkRed: "#DC3545",
        warningColor: "#FFF3CD",
        darkOrange: "#664D03",
        infoColor: "#E7F1FF",
        darkBlue: "#0A58CA",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
