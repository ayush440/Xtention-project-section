/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Caveat: ['Caveat', 'cursive'],
      CabinetGrotesk: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#00b852', // Replace with your desired color code
      },
       
      screens: {
        'sm': '400px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}
