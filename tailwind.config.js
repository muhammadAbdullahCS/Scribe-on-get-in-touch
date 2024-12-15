/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "4k": "2048px",
        hd: "1920px",
        "4k2": "3840px",
        "max-lg": { max: "1024px" }, // Custom max-width breakpoint
        "max-md": { max: "768px" }, // Custom max-width breakpoint
        "max-sm": { max: "640px" },
        "max-xsml": { max: "350px" },
      },
      spacing: {
        "custom-4k": "60rem",
        "custom-lg": "25rem",
        "custom-hd": "40rem",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        raleway: ["Raleway", "serif"],
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
        // Add any other custom line heights you want
      },
      height: {
        double: "200vh", // Add h-double to extend height with 200vh
        inbetween: "150vh",
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
