// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['1.8rem', { lineHeight: '1.2' }],
        h2: ['1.75rem', { lineHeight: '1.3' }],
        h3: ['1.5rem', { lineHeight: '1.4' }],
        h4: ['1.25rem', { lineHeight: '1.5' }],
        h5: ['1rem', { lineHeight: '1.6' }],
        h6: ['0.75rem', { lineHeight: '1.7' }],
      }      
    },
  },
  plugins: [],
}
