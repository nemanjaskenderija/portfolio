/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xss':'320px',
      'xsm': '375px',
      'xsl': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand'],
      },
      backgroundImage: {
        'hotel-project': "url('/assets/images/hotel.png')",
        'lawana-project': "url('/assets/images/lawana.png')",
      },
      colors: {
        'span-blue' : '#234C96',
        'djob-project': '#E3E7FA',
        'main-blue': '#c3d3f1',
      },
      spacing: {
        '100': '25rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '290px',
          '@screen xsm': {
            maxWidth: '346px'
          },
          '@screen sm': {
            maxWidth: '550px'
          },
          '@screen md': {
            maxWidth: '700px'
          },
          '@screen lg': {
            maxWidth: '950px'
          },
          '@screen xl': {
            maxWidth: '1170px'
          },
        }
      })
    }
  ],
}
