module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        proxima: ['Proxima Nova'],
      },
      colors: {
        customGreen: 'rgba(2, 184, 157, 1)',
        customGrey: 'rgba(110, 109, 122, 1)',
        CSgreen: "#02B89D",
        CSlightGreen: "#A9ECE1",
        CSDarkGray: "#333333",
        CSSecondaryGray: "#6E6D7A",
        CSGrayChip: "#212529",
        CSDropDownBG: "#FFFFFF",
        CSListHover: "#F6F6F6",
        CSChipBG: "#E9ECEF",
        CSChipBorder: "#CED4DA",
        CSPipeColor: "#D8D8D8",
      },
      screens: {
        sm: "1360px",
        md: "1920px",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  