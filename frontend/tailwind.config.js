/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'SpaceGrotesk': ['SpaceGrotesk', 'sans-serif'],
     },
     backgroundImage: {
      'hero-pattern': "url('../src/Assets/Image Placeholder header.png')"
  }
    },
  },
  plugins: [],
}