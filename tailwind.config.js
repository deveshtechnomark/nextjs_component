module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#02B89D",
        successText: "#FFFFFF",
        error: "#F8D7DA",
        errorText: "#DC3545",
        warning: "#FFF3CD",
        warningText: "#664D03",
        info: "#E7F1FF",
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
