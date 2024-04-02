/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        royalBlue: "	hsl(216, 91%, 13%)",
        seaSalt: "hsl(0, 8%, 97%)",
        midnightBlack: "hsl(240, 10%, 4%)",
        steelBlue: "hsl(203, 61%, 45%)",
        steelBlueDark: "hsl(207, 47%, 33%)",
        turquoise: "hsl(193, 78%, 45%)",
        pistachioGreen: "hsl(97, 59%, 52%)",
        imperialRed: "	hsl(357, 86%, 52%)",
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        herobg: "url('/src/assets/home/herobg.svg')",
        features: "url('/src/assets/home/features.svg')",
        driveIn: "url('/src/assets/home/drive-in.svg')",
        homeTheatre: "url('/src/assets/home/home-theatre.svg')",
        featuresBg: "url('/src/assets/home/featuresBg.svg')",
        loginbg: "url('/src/assets/auth/loginbg.jpg')",
        signupbg: "url('/src/assets/auth/signupbg.jpg')",
        notFound: "url('/src/assets/others/notfound.svg')",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
