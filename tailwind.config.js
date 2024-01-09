/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
        "span-18": "span 18 / span 18",
      },
    },
  },
  plugins: [],
};
