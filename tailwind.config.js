/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                lightGreen: '#B4F461',
                blackSecondary: '#11111191',
                navBg: '#F9F7F3',
            },
            fontFamily: {
                lexend: "Lexend",
            },
        },
    },
    plugins: [],
}