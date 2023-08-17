/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundColor: {
        main: '#91B2DE'
      },
      textColor: {
        main: '#91B2DE',
      },
      borderColor: {
        main: "#91B2DE",
      }
    }
  },
  plugins: []
}
