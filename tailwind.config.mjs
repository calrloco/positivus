/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    'bg-brand-primary',
    'bg-brand-slate',
    'bg-brand-dark',
  ],
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
      },
      boxShadow:{
        'card':'0px 5px 0px 0px #191A23'
      }
    },
    fontFamily: {
      sans: ["Space Grotesk", "VT323", "sans-serif"],
    },
  },
  plugins: [],
};
