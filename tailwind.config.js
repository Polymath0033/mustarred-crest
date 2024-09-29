/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Poppins"],
      backgroundImage: {
        "bg-one": "url('/src/assets/bg-one.png')",
        "bg-two": "url('/src/assets/bg-two.png')",
      },
      colors: {
        primary:"#222E50"
      },
      animation: {
        "animate-hero": "animate-hero 5s ease-in-out infinite",
      },
      keyframes: {
        "animate-hero": {
         "from": {
          "background-image": "url('/src/assets/bg-one.png')",
          },
          "to": {
            "background-image": "url('/src/assets/bg-two.png')",
          }
        },
      },
    },
  },
  plugins: [],
};
