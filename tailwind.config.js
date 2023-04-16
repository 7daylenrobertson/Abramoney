/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/Components/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-temp': "url('Components/img/home_temp.png')",
      }
    },
  },
  plugins: [],
}
