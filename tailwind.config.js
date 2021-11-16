module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
