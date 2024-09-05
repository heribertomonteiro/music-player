/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'vinho': '#9F102C',
        'laranja': '#FF2E00'
      }
    },
  },
  plugins: [],
}