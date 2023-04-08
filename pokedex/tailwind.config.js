/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                button: {
                    blue: '#33A4F5',
                    red: '#FF6262',
                },
            },
        },
    },
    plugins: [],
};
