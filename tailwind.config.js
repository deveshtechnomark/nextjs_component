module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02B89D",
        pureWhite: "#FFF",
        errorColor: "#F8D7DA",
        defaultRed: "#DC3545",
        warningColor: "#FFF3CD",
        defaultOrange: "#664D03",
        infoColor: "#E7F1FF",
        defaultBlue: "#0A58CA",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
