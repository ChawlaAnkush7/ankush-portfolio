/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      fontSize: {
        xsm: '14px',
        sm: '16px',
        xmd: '18px',
        md: '20px',
        xlg: '28px',
        lg: '32px',
        xl: '48px',
        '2xl': '58px'
      },
      colors: {
        'logo-gradient-first': '#13B0F5',
        'logo-gradient-second': '#CA24B4',
        'link-color': '#666666',
        'heading-color': '#42446E',
        'light-grey': '#a7a7a7'

      },
      boxShadow: {
        project: '2px 2px 100px 0 rgba(0,0,0,0.2)'
      },
      lineHeight: {
        'lh120': '120%',
        'lh150': '150%'
      }
    },
  },
  plugins: [],
}

