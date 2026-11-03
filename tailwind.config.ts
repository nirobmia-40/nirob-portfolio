import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          // Light
          ivory: "#F7F4EE",
          cream: "#FDFCF9",
          beige: "#EAE3D8",
          sand: "#D8CABB",
          // Brown & Accents
          espresso: "#2B211C",
          deep: "#3B2A23",
          mocha: "#604536",
          accent: "#8B654E",
          caramel: "#B58B68",
          // Dark
          charcoal: "#242321",
          softblack: "#181715",
          muted: "#77736D",
          // Text
          textLight: "#29231F",
          textLightMuted: "#756D65",
          textDark: "#F7F4EE",
          textDarkMuted: "#BEB5AA",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        "editorial": "14px",
      },
      boxShadow: {
        "coffee-subtle": "0 2px 10px rgba(43, 33, 28, 0.04), 0 1px 3px rgba(43, 33, 28, 0.03)",
        "coffee-card": "0 8px 30px rgba(43, 33, 28, 0.07), 0 2px 8px rgba(43, 33, 28, 0.04)",
        "coffee-hover": "0 14px 40px rgba(43, 33, 28, 0.12), 0 4px 12px rgba(43, 33, 28, 0.06)",
        "coffee-dark-card": "0 8px 30px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
