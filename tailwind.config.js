/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#9E9C89',
        'sage-dark': '#83806C',
        'sage-light': '#D6D4C9',
        'terracotta': '#B5502E',
        'marigold': '#E8A93B',
        'ivory': '#F9F8F3',         /* A softer, ultra-premium off-white */
        'charcoal': '#1A1C18'       /* Deepest contrast */
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        tempting: ['Tempting', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        philosopher: ['Philosopher', 'sans-serif'] /* Closely mimics logo curl */
      }
    },
  },
  plugins: [],
}
