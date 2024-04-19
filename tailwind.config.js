module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f6f9",
          300: "#e3e4e8",
          900: "#0a0f21",
          "100_03": "#f3f4f5",
          "100_04": "#f4f4f6",
          "100_02": "#f3f3f5",
        },
        white: { A700: "#ffffff", A700_b2: "#ffffffb2" },
        blue_gray: { 400: "#888ea2", 600: "#505887", 800: "#343c6a", 900: "#182651" },
        indigo: { 200: "#8e9ed6", 500: "#425ebd", 700: "#2943a1", "600_01": "#314ca3" },
        red: { 700: "#d13329" },
        green: { 600: "#359766" },
        blue_gray_800_01: "#333b69",
      },
      boxShadow: {
        xs: "4px 4px  18px -2px #e6e3e7cc",
        sm: "0px 2px  5px 0px #00000019",
        bs: "inset 0px 0px  15px 0px #1133847f",
      },
      fontFamily: { inter: "Inter", lato: "Lato" },
      backgroundImage: { gradient: "linear-gradient(180deg, #ffffff26,#ffffff26)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
