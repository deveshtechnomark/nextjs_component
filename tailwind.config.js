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
        primary: "#02B89D",
        textColor: "#333333",
        borderColor: '#D8D8D8',
        lightGreen: '#E6F8F6',
        whiteSmoke: "#F6F6F6",
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
          top: '26%',
          left: '26%',
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

        '.bottomAnimation': {
          animation: 'bottomAnimation .5s ease-in-out',
        },
        '@keyframes bottomAnimation': {
          '0%': {
            transform: 'translateY(10%)',
          },
          '30%': {
            transform: 'translateY(0)',
          },
        },

        '.topAnimation': {
          animation: 'topAnimation .5s ease forwards',
        },
        '@keyframes topAnimation': {
          '0%': {
            transform: 'translateY(-30%)',
            opacity: '0'
          },        
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },

        '.slideLeftAnimation': {
          animation: 'slideLeftAnimation .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',

        },
        '@keyframes slideLeftAnimation': {
          "0%": {
            transform: "translateX(-100px)",
          },
          "100%": {
            transform: "translateX(0)",
          }
        },

        '.slideRightAnimation': {
          animation: 'slideRightAnimation .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',

        },
        '@keyframes slideRightAnimation': {
          "0%": {
            transform: "translateX(100px)",
            visibility: "hidden",
            opacity:"0"
          },
          "100%": {
            transform: "translateX(0px)",
            visibility: "visible",
            opacity:"1"
          }
        },
      };
      addUtilities(utilities);
    },
  ],
}

