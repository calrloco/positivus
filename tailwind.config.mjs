/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#B9FF66",
        "brand-slate": "#B9FF66",
        "brand-dark": "#191A23",
      },
      borderRadius: {
        'btn': '14px'
      },
    },
    fontFamily: {
      sans: ["Space Grotesk", "VT323", "sans-serif"],
    },
  },
  plugins: [],
};
