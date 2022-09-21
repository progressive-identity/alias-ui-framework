/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('../presets/tailwind-presets.cjs')
  ],
  content: ["./src/**/*.{html,js,vue,ts,tsx,jsx}"],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'alias-'
}
