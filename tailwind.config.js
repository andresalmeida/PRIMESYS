const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}
