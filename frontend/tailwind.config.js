/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['42px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['58px', '64px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    container: {
      padding: '4rem',
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1536px',
      }
    },
    
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'sans-serif'],
        crimson: ['Crimson Text', 'sans-serif'],
      },
      colors: {
        'primary': "#100A00",
        "orange": "#B4640A",
        'yellow': '#D49759',
        'cream': '#FFE5D4',
        'creamh': '#FFCEAD',
        'borderc': '#E1B68B',
        "gradient-c": "linear-gradient(222deg, #FFEEE1 -7.77%, rgba(255, 232, 215, 0.60) 98.72%)",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      spacing: {
        '3.75': '2rem',
      },
    },
  },
  plugins: [],
}