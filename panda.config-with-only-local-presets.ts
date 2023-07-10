import { defineConfig, definePreset } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  presets: [definePreset({ theme: { tokens: { colors: { 'test.light': { value: '#112233' } } } } })],

  // The output directory for your css system
  outdir: "styled-system-with-only-local-presets",


})