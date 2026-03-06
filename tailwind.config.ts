import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#181818",
          700: "#242424",
          600: "#2d2d2d",
          500: "#3a3a3a",
          400: "#555555",
          300: "#777777",
          200: "#b5b5b5",
          100: "#e0e0e0"
        },
        bone: {
          50: "#f8f6f2",
          100: "#efebe5",
          200: "#ded6ca",
          300: "#c4b7a6"
        }
      },
      fontFamily: {
        display: ["\"Canela\"", "\"Noe Display\"", "serif"],
        body: ["\"Neue Haas Grotesk\"", "\"Helvetica Neue\"", "Arial", "sans-serif"]
      },
      letterSpacing: {
        luxe: "0.12em"
      },
      backgroundImage: {
        "noir-gradient": "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.05), transparent 50%)"
      },
      boxShadow: {
        "soft-edge": "0 20px 60px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
