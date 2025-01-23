/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        body_bg: "#FFF7ED",
        find_van_btn: "#FF8C38",
        footer_bg: "#252525",
        footer_text: "#AAAAAA",
        host_nav_link: "#4D4D4D",
        active_host_nav_link: "#161616"
      },
      backgroundImage: {
        home: "url('./src/assets/home.jpg')"
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.25)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        lg: "15px 15px 15px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme("textShadow");
      const utilities = Object.entries(textShadow).map(([key, value]) => {
        const className = key === "DEFAULT" ? ".text-shadow" : `.text-shadow-${key}`;
        return { [className]: { textShadow: value } };
      });
      addUtilities(Object.assign({}, ...utilities));
    },
  ],
}