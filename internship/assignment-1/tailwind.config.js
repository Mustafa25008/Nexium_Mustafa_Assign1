// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // for pages like page.tsx, layout.tsx
    "./src/components/**/*.{js,ts,jsx,tsx}", // for your UI components
    "./src/data/**/*.{js,ts,jsx,tsx}",       // optional if you're using dynamic classes in data
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
