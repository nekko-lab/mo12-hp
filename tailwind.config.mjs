/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    textColor: (theme) => theme("color"),
    textColor: {
      primary: "#fffcfc",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#060620",
      secondary: "#171717",
    }),
  },
  plugins: [],
};
