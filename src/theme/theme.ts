import { DefaultTheme, FontTheme } from "styled-components";

export const font: FontTheme = {
  face: "Inter",
  sizes: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "24px",
    xl: "36px",
    xxl: "108px",
  },
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const sizing = {
  one: "4px",
  two: "8px",
  three: "12px",
  four: "16px",
  five: "20px",
  six: "24px",
  seven: "36px",
  eight: "48px",
  boxShadow: "0px 4px 24px",
};

export const dark: DefaultTheme = {
  sizing,
  colors: {
    text: {
      default: "#FFFFFF",
      secondary: "#7A8C99",
      active: "#07303B",
      negative: "#FF4040",
      highlight: "#FF9F1C",
      disabled: "#353F4C",
    },
    layout: {
      background: "#0A1014",
      foreground: "#0E1519",
      border: "#1E788A", //"#353F4C",
      accent: "#7A8C99",
      boxShadowBtn: "rgba(23, 92, 230, 0.15)",
      boxShadowInput: "rgba(66, 148, 110, 0.15)",
    },
  },
};
