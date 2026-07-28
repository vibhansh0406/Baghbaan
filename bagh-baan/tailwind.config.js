/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1F3B2C',
        'terracotta': '#B5502E',
        'marigold': '#E8A93B',
        'ivory': '#F4ECD8',
        'dusk-plum': '#2A1F3D',
        'wood-brown': '#5C3D2E'
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        tempting: ['Tempting', 'serif']
      }
    },
  },
  plugins: [],
}
