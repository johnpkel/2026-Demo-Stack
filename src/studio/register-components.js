"use client";
import { registerComponents } from "@contentstack/studio-react";
import StudioHero from "./components/StudioHero";

// Register the Studio Hero component
registerComponents([
  {
    type: "studio-promo",
    component: StudioHero,
    displayName: "Promo",
    description:
      "A customizable Promo sectionwith background image, text content, and call-to-action button",
    props: {
      // Content Group
      headline: {
        type: "string",
        displayName: "Headline",
        defaultValue: "Welcome to Our Amazing Product",
      },
      description: {
        type: "string",
        displayName: "Description",
        defaultValue:
          "Discover the future of innovation with our cutting-edge solutions that transform the way you work.",
      },
      backgroundImage: {
        type: "imageurl",
        displayName: "Background Image",
        defaultValue:
          "https://images.contentstack.io/v3/assets/blt441ffce57ce4e444/bltc99f10d5442f0f9b/688803b7adfa6b90072e3155/dining_table.jpeg",
      },

      // Layout Group
      centerText: {
        type: "boolean",
        displayName: "Center Text",
        defaultValue: false,
      },
      largeText: {
        type: "boolean",
        displayName: "Large Text",
        defaultValue: false,
      },
      fullHeight: {
        type: "boolean",
        displayName: "Full Screen Height",
        defaultValue: false,
      },

      // Colors Group
      textColor: {
        type: "string",
        displayName: "Text Color",
        defaultValue: "white",
      },
      backgroundColor: {
        type: "string",
        displayName: "Background Color",
        defaultValue: "#1f2937",
      },
      overlayColor: {
        type: "string",
        displayName: "Overlay Color",
        defaultValue: "rgba(0,0,0,0.5)",
      },

      // Button Group
      showButton: {
        type: "boolean",
        displayName: "Show Button",
        defaultValue: true,
      },
      buttonText: {
        type: "string",
        displayName: "Button Text",
        defaultValue: "Get Started",
      },
      buttonLink: {
        type: "string",
        displayName: "Button Link",
        defaultValue: "#",
      },

      // Effects Group
      showOverlay: {
        type: "boolean",
        displayName: "Show Overlay",
        defaultValue: true,
      },
      useBackgroundColor: {
        type: "boolean",
        displayName: "Use Background Color",
        defaultValue: false,
      },
    },
  },
]);

export default StudioHero;
