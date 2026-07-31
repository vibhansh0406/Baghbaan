/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#9E9C89',          /* The base background color from the logo */
        'sage-dark': '#83806C',     /* Darker variant for hover states */
        'sage-light': '#B2B09F',    /* Lighter variant */
        'terracotta': '#B5502E',    /* Kept for subtle pizza accents */
        'marigold': '#E8A93B',      /* Kept for star ratings / tiny accents */
        'ivory': '#FFFFFF',         /* Adjusted to pure white to match the logo text */
        'charcoal': '#232520'       /* Adjusted charcoal to have a slight greenish tint */
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
