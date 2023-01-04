/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#EEF1FB',
        'color_yellow': '#F5EE9E',
        'color_orange': '#D05D38',
        'color_dark_blue': '#373F51',
      },
    },
  },
  plugins: [],
}