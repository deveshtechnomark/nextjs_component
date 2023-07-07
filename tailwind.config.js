module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    extend: {
      colors: {
        primary: "#02B89D",
        slatyGrey: "#6E6D7A",
        defaultRed: "#DC3545",
        successColor: "#198754",
        lightSilver: "#D8D8D8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
