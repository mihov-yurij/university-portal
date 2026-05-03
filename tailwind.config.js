/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'edu-blue': '#1a2c3d',
        'edu-gold': '#fbbf24',
        'navy': '#1a2c3d',
        'gold': '#eab308',
      },
    },
  },
  plugins: [],
}


