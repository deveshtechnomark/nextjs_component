module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pureWhite: "#FFF",
        add: "#FECBA1",
        addText: "#CA6510",
        defaultBlue: "#0A58CA",
        defaultRed: "#DC3545",
        defaultOrange: "#664D03",
        primary: "#02B89D",
        skyBlue: "#0DCAF0",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
