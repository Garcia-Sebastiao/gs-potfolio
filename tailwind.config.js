/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: "poppinsLight",
        poppins: "poppins",
        poppinsMedium: "poppinsMedium",
        poppinsSemiBold: "poppinsSemiBold",
        poppinsBold: "poppinsBold",
      },
      colors: {
        "primary-color": "#22B573",
        "primary-color-50": "#22B57350",
        "secondary-color": "#00FF48",
        "gray-variation-1": "#272727",
        "gray-variation-2": "#242625",
      },
      screens: {
        xs: "320px",
        sm: "414px",
        md: "640px",
        lg: "1000px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
