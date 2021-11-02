module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //           'main': "url('../../src/images/bg-main.png')",
      //           }),
      colors: {
        brand: {
          dark: '#5033FF',
          DEFAULT: '#715CFF',
          light: '#9E8FFF',
        },
        gray:{
          title: 'rgba(0, 0, 0, 0.8)',
          DEFAULT: 'rgba(0, 0, 0, 0.6)',
          secondary: 'rgba(0, 0, 0, 0.45)',
          disable:'rgba(0, 0, 0, 0.25)',
          border:'rgba(0, 0, 0, 0.15)',
          dividers:'rgba(0, 0, 0, 0.06)',
          bg:'rgba(0, 0, 0, 0.04)',
          bglight:'rgba(0, 0, 0, 0.02)',
        },
        notice:{
          DEFAULT: '#3396FF',
          bg:'rgba(51, 150, 255, 0.4)'
        },
        error:{
          DEFAULT: '#FF3F3F',
          bg:'rgba(255, 63, 63, 0.4)'
        },
        success:{
          DEFAULT: '#76D219',
          bg:'rgba(118, 210, 25, 0.4)'
        },
        warning:{
          DEFAULT: '#FFAA00',
          bg:'rgba(255, 170, 0, 0.4)'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
