/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        CSBorderColor: '#E5E5E5',
        CSCalendarArrow: '#848A95',
        CSHoverGreen: '#02B89D1A'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        '.rippleAnimation': {
          animation: 'ripple 2.0s infinite',
          width: '50%',
          height: '50%',
          top: '27%',
          left: '24%',
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
          '25%': {
            transform: 'scale(1.5)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'scale(2)',
            opacity: '0.3',
          },
          '75%': {
            transform: 'scale(2.5)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        '.divAnimation': {
          animation: 'divAnimation 1s ease-in-out',
        },
        '@keyframes divAnimation': {
          '0%': {
            transform: 'translateY(10%)',
          },
          '30%': {
            transform: 'translateY(0)',
          },
        },
      };

      addUtilities(utilities);
    },
  ],
}

