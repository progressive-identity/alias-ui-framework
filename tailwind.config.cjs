/** @type {import('tailwindcss').Config} */

/** WARNING: new theme infos or plugins that need to be exported in the npm package MUST be declared in tailwind-presets.ts */

const colors = require("tailwindcss/colors.js");
module.exports = {
  presets: [
    require('./tailwind-presets.cjs')
  ],
  content: ["./src/**/*.{html,js,vue,ts,tsx,jsx}"],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'alias-'
}
