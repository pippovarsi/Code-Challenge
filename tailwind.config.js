module.exports = {
  content: {
    relative: true,
    files: ["./index.html", "./src/**/*.css", "src/**/*.{js,jsx,ts,tsx}"],
  },

  plugins: [require("@tailwindcss/forms")],
};
