/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('@alias-code-is-law/alias-tailwind-presets')
  ],
  content: ["./src/**/*.{html,js,vue,ts,tsx,jsx}"],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'alias-'
}
