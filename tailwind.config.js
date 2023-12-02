/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
      colors: {
        "dark-blue": "#28156F",
        "gray-blue": "#45559E",
        "main-blue": "#8FC4E5",
        "light-blue": "#D2EAF1",
        "dark-green": "#3C5B2B",
        "main-green": "#01913E",
        "main-gray": "#E2E2E2",
        "dark-gray": "#474747",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
