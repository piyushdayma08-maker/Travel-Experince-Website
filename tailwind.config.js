module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#eef6f7',
          500: '#61b7cf',
          700: '#2f8184'
        },
        sand: '#F5E9DA',
        ocean: '#2F5D50',
        dusk: '#1c2a3a',
        sunset: '#F4A261',
        lagoon: '#6fbf9b'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(15, 23, 42, 0.6)'
      }
    }
  },
  plugins: []
}
