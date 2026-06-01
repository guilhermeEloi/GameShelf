export const theme = {
  colors: {
    primary: "#7F77DD",
    primaryLight: "#EEEDFE",
    primaryDark: "#534AB7",

    background: "#F9F9F9",
    surface: "#FFFFFF",
    surfaceHover: "#F1EFE8",

    text: {
      primary: "#2C2C2A",
      secondary: "#888780",
      hint: "#B4B2A9",
    },

    border: "#E0DED8",

    status: {
      playing: {
        bg: "#E1F5EE",
        text: "#0F6E56",
      },
      completed: {
        bg: "#EEEDFE",
        text: "#534AB7",
      },
      wishlist: {
        bg: "#FAEEDA",
        text: "#854F0B",
      },
      dropped: {
        bg: "#FAECE7",
        text: "#993C1D",
      },
    },
  },

  fonts: {
    primary: "'Inter', sans-serif",
  },

  fontSizes: {
    xs: "11px",
    sm: "13px",
    md: "15px",
    lg: "17px",
    xl: "22px",
  },

  radii: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
} as const;

export type Theme = typeof theme;
