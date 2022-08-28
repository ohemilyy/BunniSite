/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /text-(.+)-(.+)/,
    },
    {
      pattern: /bg-(.+)-(.+)/,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        "AegixHeader": ["Gilroy"],
        "AegixSubheader": ["Readex Pro"],
        "AegixText": ["Readex Pro"],
        "AegixMono": ["Space Mono"]
      },
      colors: {
        code: {
          default: "#22a6f1",
          darker: "#1d9ff0"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}