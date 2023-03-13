/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundColor: {
        bug: "#76A866",
        dark: "#70657B",
        dragon: "#004170",
        electric: "#E7BF0D",
        fairy: "#EA85E4",
        fighting: "#D96D8C",
        fire: "#EAAB7D",
        flying: "#6892B0",
        ghost: "#7587BD",
        grass: "#729F92",
        ground: "#E7A888",
        ice: "#59C5B4",
        normal: "#BF9762",
        poison: "#B978BA",
        psychic: "#F88C90",
        rock: "#C7B78B",
        steel: "#ADADAD",
        water: "#71C3FF",
        default: "#BF9762",
      },
    },
  },
  plugins: [],
};
