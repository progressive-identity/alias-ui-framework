/** @type {import('tailwindcss').Config} */

/** WARNING: new theme infos or plugins that need to be exported in the npm package MUST be declared in tailwind-presets.ts */

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
