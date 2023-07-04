module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#DC3545",
        textExcellent: "#02B89D",
        textGood: "#FFBF00",
        textWeek: "#DC3545",
        textDefault: "#979797",
        success: "#198754",
        defaultColor: "#6E6D7A",
      },
      screens: {
        passwordsm: "800px",
        passwordmd: "1360px",
        sm: "1360px",
        md: "1920px",
      },
    },
  },
  plugins: [],
};
