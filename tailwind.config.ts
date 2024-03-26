import { type Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      animation: {
        "slide-up": "slide-up 0.5s ease-out 1"
      },
      keyframes: {
        "slide-up": {
          "0%": { translate: "0px 10px", opacity: 0 },
          "100%": { translate: "0px 0px", opacity: 1 }
        }
      }
    }
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
