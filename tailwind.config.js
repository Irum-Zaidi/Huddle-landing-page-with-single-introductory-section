/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "--Violet": "hsl(257, 40%, 49%)",
        "--Soft-Magenta": "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        'mobile': "url('./images/bg-mobile.svg')",
        'desktop': "url('./images/bg-desktop.svg')",
        
      },
      fontFamily: {
        // 'custom': ['MyCustomFont', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Open-Sans': ['Open Sans', 'sans-serif'],
        /* Replace 'MyCustomFont' with the name you used in @font-face */
      },
    },
  },
  plugins: [],
}

