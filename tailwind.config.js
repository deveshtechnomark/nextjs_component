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

        '.topBottomAnimation': {
          animation: 'topBottomAnimation 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        },
        '@keyframes topBottomAnimation': {
          '0%': {
            transform: 'scaleY(0.4)',
            transformOrigin: '100% 0%'
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: '100% 0%'
          }
        },

        '.divAnimation2': {
          animation: 'divAnimation2 1s ease-in-out',
          
        },
        '@keyframes divAnimation2': {
          '0%': { left: '0' },
          '10%': { left: '10%' },
        },
      };
      addUtilities(utilities);
    },
  ],
}

