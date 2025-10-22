import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"', 'Libre Franklin-fallback', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
