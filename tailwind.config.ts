import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cybertron: {
                    black: "#0B0B0F",
                    gold: "#F5C518",
                    silver: "#C0C0C0",
                    gunmetal: "#8A8F98",
                    blue: "#4F9CFF",
                    amber: "#FFB800",
                },
                ui: {
                    bg: "#111216",
                    card: "#1B1C22",
                    border: "#2A2C35",
                    text: "#F5F5F5",
                    secondary: "#B0B3BD",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            animation: {
                "float-metal": "float-metal 6s ease-in-out infinite",
                "energy-pulse": "energy-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "slide-up": "slide-up 0.8s ease-out forwards",
                "spark-fade": "spark-fade 0.5s ease-out forwards",
            },
            keyframes: {
                "float-metal": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "energy-pulse": {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.05)" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(50px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "spark-fade": {
                    "0%": { opacity: "1", transform: "scale(1)" },
                    "100%": { opacity: "0", transform: "scale(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
