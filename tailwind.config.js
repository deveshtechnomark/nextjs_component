module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02B89D",
        pureWhite: "#FFFFFF",
        errorColor: "#F8D7DA",
        errorText: "#DC3545",
        warningColor: "#FFF3CD",
        warningText: "#664D03",
        infoColor: "#E7F1FF",
        infoText: "#0A58CA",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
