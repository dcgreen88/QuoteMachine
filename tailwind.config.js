module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'], // Add Raleway with a fallback
      },
    },
  },
  safelist: [
    {
      pattern:
        /(text|bg)-(red|blue|green|yellow|purple|pink|gray|indigo|teal|lime|orange|violet|white)-[0-9]{3}/,
    },
  ],
};
