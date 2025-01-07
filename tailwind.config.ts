import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Use your CSS variable for the background
        foreground: "var(--foreground)", // Use your CSS variable for the foreground
        border: "var(--border)", // Define a CSS variable for the border
      },
    },
  },
  plugins: [],
} satisfies Config;