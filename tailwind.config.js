module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    extend: {
      colors: {
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
        CSError: "#DC3545",
        CSEmailSuccess: "#198754",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
