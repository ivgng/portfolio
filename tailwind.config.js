/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    fontFamily: {
      quicksand: ["Quicksand"]
    },
    extend: {
      inset:{
        '16':'4rem',
        '18':'4.5rem',
        '20':'5rem'
      },
      zIndex:{
        '5': '5'
      }
    },
    darkSelector: ".dark-mode"
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require("tailwindcss-dark-mode")()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ],
    whitelist: ["mode-dark"]
  }
};
