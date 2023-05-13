/** @type {import('tailwindcss').Config} */
const tailwindColors = require('./node_modules/tailwindcss/colors');
const colorSafeList = [];

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'];

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue;
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const pallette = tailwindColors[colorName];

  if (typeof pallette === 'object') {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`);
        colorSafeList.push(`bg-${colorName}-${shade}`);
      }
    });
  }
}

module.exports = {
  safelist: colorSafeList,
  content: ["./templates/*.{html}","./templates/**/*.{html}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter', sans-serif"],
        heading: ["'Inter', sans-serif"],
      },
      colors: {
        ...tailwindColors,
        primary: '#1498d5',
      },
      textColor: {
        primary: "#1498d5",
      },
      backgroundColor: {
        primary: "#1498d5",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      //strategy: 'class', // only generate classes
    }),
  ],
}

