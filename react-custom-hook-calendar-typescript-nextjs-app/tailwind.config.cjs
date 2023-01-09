/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kosugi: ['Kosugi', 'sans-serif'],
      noto: ['Noto Sans JP', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-capitalize-first-letter'),
    require('tailwindcss-no-scrollbar'),
    require('tailwindcss-global-dark'),
  ],
}
