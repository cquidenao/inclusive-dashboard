/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F75A1A',
        secondary: {
          100: '#1E1F25',
          800: '#2D2F36', // Agrega el color secondary-800
          900: '#131517',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
};
