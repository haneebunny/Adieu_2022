/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        underline: {
          "0%": {
            transform: "scaleX(0)", // 시작: 밑줄이 보이지 않음
            opacity: "0",
            transformOrigin: "left",
          },
          "10%": {
            opacity: "1", // 살짝 보이기 시작
          },
          "100%": {
            transform: "scaleX(1)", // 끝: 밑줄이 완전히 나타남
            opacity: "1",
            transformOrigin: "left",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        underline: "underline 1.5s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".delay-1000": {
          "animation-delay": "1s",
        },
        ".delay-1500": {
          "animation-delay": "1.5s",
        },
        ".delay-2000": {
          "animation-delay": "2s",
        },
      });
    },
  ],
};