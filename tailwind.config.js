/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

  },
  variants:{
extend:{
  lineClamp: ['hover']
}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

