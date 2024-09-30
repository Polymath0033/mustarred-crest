/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Poppins"],
      backgroundImage: {
        "bg-one": "url('/src/assets/bg-one.png')",
        "bg-two": "url('/src/assets/bg-two.png')",
        "bg-gradient": "linear-gradient(133deg, #001F3F 0%, #0051A5 97.7%)",
        "bg-blue": "url('/src/assets/bg-blue.png')",
      },
      colors: {
        primary: "#222E50",
      },
      animation: {
        "animate-hero": "animate-hero 5s ease-in-out infinite",
        "animate-h1-text": "animate-h1-text 5s ease-in-out infinite",
      },
      gridTemplateColumns: {
        "grid-3": "repeat(3, minmax(250px, 1fr))",
      },
      keyframes: {
        "animate-hero": {
          from: {
            "background-image": "url('/src/assets/bg-one.png')",
          },
          to: {
            "background-image": "url('/src/assets/bg-two.png')",
          },
        },
      },
    },
  },
  plugins: [],
};
