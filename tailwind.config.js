/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      '1/2': '50%',
      '3/4': '75%',
      '1/4': '25%',
      '1/10': '10%',
      '9/10': '90%'
    },
    extend: {},
  },
  plugins: [],
};
