module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '547px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1680px',
    },
    extend: {
      colors: {
        primary: '#121212',
        background: '#f5f5f5',
        gray: {
          400: '#dadde1',
          100: '#737373',
        },
        blue: {
          400: '#1877f2',
          300: '#254754',
          200: '#3592B4',
          100: '#40A4C9',
        },
        green: '#42b72a',
        yellow: '#FFBF00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
