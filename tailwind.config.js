module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope"],
            },
            textColor: {
                blue: {
                    100: "#858fad",
                    200: "#293356",
                },
                red: {
                    50: "#ff8c66",
                },
            },
            backgroundColor: {
                blue: {
                    50: "#fafbff",
                    100: "#a5f3eb",
                    150: "#293356",
                },
                red: {
                    50: "#feece7",
                },
                gray: {
                    50: "#cdd7ee",
                },
            },
            backgroundImage: (theme) => ({
                pattern: "url('imgs/bg-pattern.svg')",
                circles: "url('imgs/pattern-circles.svg')",
            }),
            zIndex: {
                "-1": "-1",
            },
            spacing: {
                600: "600px",
            },
            backgroundSize: {
                10050: "100% 50%",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};