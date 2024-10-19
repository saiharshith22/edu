const { default: daisyui } = require("daisyui");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // paths to your project files
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // DaisyUI plugin
  daisyui: {
    themes: ["light"],
  },
};
