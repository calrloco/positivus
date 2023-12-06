/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#B9FF66",
        "brand-slate": "#F3F3F3",
        "brand-dark": "#191A23",
      },
      borderRadius: {
        'btn': '14px',
        '4xl': '2.813rem',
      },
      padding:{
        '1.5': '0.438rem'
      }
    },
    fontFamily: {
      sans: ["Space Grotesk", "VT323", "sans-serif"],
    },
  },
  plugins: [],
};
