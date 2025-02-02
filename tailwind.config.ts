import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF69B4", // Pink
        secondary: "#000000", // Black
        background: "#000000", // Black
        text: "#FFFFFF", // White
        border: "#333333", // Dark gray for borders
      },
    },
  },
  plugins: [],
}

export default config

