module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        bor: '#FF6600'
      },
      screens:{
        nice: '950px',
        mobile: '430px',
        smallmobile: '350px'
      },
      maxWidth: (theme, { breakpoints }) => ({
        supersm: '15rem',
        ...breakpoints(theme('screens')),
      }),
    },
  },
  variants: {},
  plugins: [],
}
