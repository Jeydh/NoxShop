import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nox: {
          950: "#080A0F",
          900: "#11141C",
          800: "#181C27",
          700: "#252A36",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
      },
      boxShadow: {
        glow: "0 0 35px rgba(139, 92, 246, 0.18)",
        "glow-cyan": "0 0 35px rgba(34, 211, 238, 0.14)",
      },
    },
  },
}