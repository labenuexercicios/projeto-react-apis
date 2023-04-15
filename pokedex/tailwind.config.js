const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#5E5E5E',
                button: {
                    blue: '#33A4F5',
                    red: '#FF6262',
                },
                types: {
                    electric: '#E2BF65',
                    ice: '#96D9D6',
                    fighting: '#C22E28',
                    poison: '#A33EA1',
                    ground: '#B57859',
                    flying: '#A98FF3',
                    psychic: '#F95587',
                    rock: '#B6A136',
                    ghost: '#735797',
                    dragon: '#6F35FC',
                    dark: '#705746',
                    steel: '#B7B7CE',
                    fairy: '#D685AD',
                    fire: '#EAAB7D',
                    grass: '#729F92',
                    water: '#71C3FF',
                    bug: '#76A866',
                    normal: '#BF9762',
                    dragon: '#004170',
                },
            },
            fontFamily: {
                sans: ['var(--font-poppins)', ...fontFamily.sans],
            },
            backgroundImage: {
                pokeball: "url('/images/pokeball.svg')",
            },
        },
    },
    plugins: [],
};
