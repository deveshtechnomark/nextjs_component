module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    extend: {
      colors: {
        lightGray: "#F4F4F4",
        primary: "#02B89D",
        slatyGreen: '#CCF1EB'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {

        '.scaleUpAnimation': {
          animation: 'scaleUpAnimation 0.5s both',
        },
        '@keyframes scaleUpAnimation': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(.8, .8, .8)',
          }
        },

        '.topAnimation': {
          animation: ' topAnimation .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        },
        '@keyframes topAnimation': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)',
          }
        },
      };
      addUtilities(utilities);
    },
  ],
}