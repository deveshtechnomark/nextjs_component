module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#FFFFFF",
        add: "#FECBA1",
        addText: "#CA6510",
        blue: "#3266a8",
        red: "#DC3545",
        yellow: "#827c23",
        green: "#02B89D",
        purple: "#672496",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
