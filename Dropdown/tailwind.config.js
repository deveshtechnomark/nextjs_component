module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    extend: {
      colors: {
        CSgreen: "#02B89D",
        CSDarkGray: "#333333",
        CSSecondaryGray: "#6E6D7A",
        CSGrayChip: "#212529",
        CSDropDownBG: "#FFFFFF",
        CSListHover: "#F6F6F6",
        CSChipBG: "#E9ECEF",
        CSChipBorder: "#CED4DA"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
