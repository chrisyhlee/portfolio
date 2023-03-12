/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gHome': "url('/src/assets/gourmandize-home.gif')",
        'gAbout': "url('/src/assets/gourmandize-about.gif')",
        'gReview': "url('/src/assets/gourmandize-review.gif')",
      },
      width: {
        'big': '60rem',
        '70p': '70%',
        '72p': '72.5%'
      },
      colors: {
        'myteal': 'rgb(3, 238, 172)',
        'namewhite': 'rgb(245, 245, 225)',
        'darkerwhite': 'rgb(200, 200, 188)'
      },
      backgroundColor: {
        'navgrey': 'rgb(56, 56, 56)'
      },
      boxShadow: {
        'picshadow': '0px 0px 100px 25px rgb(100, 100, 96)'
      }
    },
  },
  plugins: [],
}
