import { registerDesignTokens } from "@contentstack/studio-react";

registerDesignTokens(
  {
    colorTokens: {
      // Primary brand colors
      primary: "#004D6E",
      secondary: "#EBF9FB",
      accent: "#38748e",
      // Neutral colors
      white: "#FFFFFF",
      black: "#000000",
      "neutral-50": "#fafafa",
      "neutral-100": "#f5f5f5",
      "neutral-200": "#e5e5e5",
      "neutral-300": "#d4d4d4",
      "neutral-400": "#a3a3a3",
      "neutral-500": "#737373",
      "neutral-600": "#525252",
      "neutral-700": "#404040",
      "neutral-800": "#262626",
      "neutral-900": "#171717",
    },
    spaceTokens: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
    },
    border: {
      color: {
        primary: "#004D6E",
        secondary: "#E7ECFF",
        neutral: "#d4d4d4",
      },
      radius: {
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
    typography: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        cinzel: "var(--font-cinzel)",
        playfair: "var(--font-playfair)",
        raleway: "var(--font-raleway)",
        opensans: "var(--font-opensans)",
        spectral: "var(--font-spectral)",
        cormorant: "var(--font-cormorant)",
        lexend: "var(--font-lexend)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  {
    allowDefaultDesignTokens: true,
    allowedValuesLevel: "tokens",
    //  allowedValuesLevel: 'arbitrary',
  },
);
