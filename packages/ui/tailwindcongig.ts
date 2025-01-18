/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Important: This allows users of your library to override these styles
  important: true,
  // This prefix prevents conflicts with the user's own Tailwind classes
  prefix: 'lj-',
};
