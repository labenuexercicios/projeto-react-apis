const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#5E5E5E',
                button: {
                    blue: '#33A4F5',
                    red: '#FF6262',
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
