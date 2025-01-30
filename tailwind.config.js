export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        xs: "360px", // Adjusted for smaller phones
        sm: "480px", // Small devices
        md: "740px", // Medium devices
        m: "540px",
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X Large devices
      },
    },
  },
  plugins: [],
};
