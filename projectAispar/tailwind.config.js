/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F28500',
        secondary: {
          teal: '#008080',
          eggplant: '#614051'
        },
        accent: {
          moss: '#8A9A5B',
          vanilla: '#F3E5AB'
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif']
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.2' }],
        'h1': ['3rem', { lineHeight: '1.2' }],
        'h2': ['2.25rem', { lineHeight: '1.3' }],
        'h3': ['1.875rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.5' }]
      }
    },
  },
  plugins: [],
}