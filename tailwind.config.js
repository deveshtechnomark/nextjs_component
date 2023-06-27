module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "rgba(217, 217, 217, 0.5);",
        textColor: "#333333",
        hoverColor: "#F6F6F6",
        borderColor: "#02B89D",
        borderBottomColor: "#DCDCDC",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
