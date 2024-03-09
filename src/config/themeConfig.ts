import { Palette } from "@mui/material";

export const lightPaletteText = {
  primary: "rgba(0,0,0,0.87)",
  secondary: "rgba(0,0,0,0.54)",
  disabled: "rgba(0,0,0,0.38) ",
};

export const darkPaletteText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(148, 163, 184)",
  disabled: "rgb(156, 163, 175)",
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1024,
    lg: 1200,
    xl: 1536,
  },
};

export const fontFamily = [
  "dana",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const themesConfig = {
  default: {
    breakpoints,
    direction: "rtl",
    shape: {
      borderRadius: 10,
    },
    spacing: 1,
    palette: {
      mode: "light",
      divider: "rgba(0,0,0,0.12)",
      text: lightPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#4FD4B3",
        main: "#24caa1",
        dark: "#198D70",
        contrastText: "#fff",
      },
      secondary: {
        light: "#778BF7",
        main: "#556FF6",
        dark: "#3B4DAC",
        contrastText: "#fff",
      },
      error: {
        light: "#FF5C5C",
        main: "#F44336",
        dark: "#AA2E25",
        contrastText: "#fff",
      },
      success: {
        light: "#81C784",
        main: "#4CAF50",
        dark: "#388E3C",
        contrastText: "rgba(0,0,0,0.87)",
      },
      info: {
        light: "#64B5F6",
        main: "#2196F3",
        dark: "#1976D2",
        contrastText: "#fff",
      },
      warning: {
        light: "#FFB74D",
        main: "#FF9800",
        dark: "#F57C00",
        contrastText: "rgba(0,0,0,0.87)",
      },
      background: {
        paper: "#fff",
        default: "#f3f3f3",
      },
    },
    shadows: [
      "none",
      "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);",
      "0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)",
      "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
      "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
      "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      ...new Array(19).fill(
        "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)"
      ),
    ],
    typography: {
      fontFamily: fontFamily.join(","),
      fontWeightLight: 100,
      fontWeightRegular: 400,
      h1: {
        fontSize: 40,
        lineHeight: 3.375,
        fontWeight: 800,
      },
      h2: {
        fontSize: 32,
        lineHeight: 2.75,
        fontWeight: 800,
      },
      h3: {
        fontSize: 28,
        lineHeight: 2.375,
        fontWeight: 800,
      },
      h4: {
        fontSize: 24,
        lineHeight: 2,
        fontWeight: 800,
      },
      h5: {
        fontSize: 20,
        lineHeight: 1.75,
        fontWeight: 800,
      },
      h6: {
        fontSize: 16,
        lineHeight: 1.375,
        fontWeight: 800,
      },
      body1: {
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 400,
      },
      body2: {
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 600,
      },
      subtitle2: {
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 600,
      },
      caption: {
        fontSize: 12,
        lineHeight: 1.125,
        fontWeight: 400,
      },
      button: {
        fontSize: 14,
        lineHeight: 1.75,
        fontWeight: 400,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".space-between-letters input": {
            letterSpacing: "5px !important",
          },
        },
      },
      // MuiSkeleton: {
      //   defaultProps: {
      //     animation: 'wave',
      //   },
      // },
      MuiLoadingButton: {
        defaultProps: {
          variant: "contained",
          color: "primary",
        },
      },
      MuiPickersPopper: {
        styleOverrides: {
          root: {
            zIndex: 1301,
          },
        },
      },

      MuiButton: {
        defaultProps: {
          variant: "outlined",
          color: "primary",
        },
        styleOverrides: {
          root: {
            // borderRadius: '6px',
          },
          sizeSmall: {
            fontSize: 13,
          },
          sizeLarge: {
            fontSize: 16,
            paddingTop: 10,
            paddingBottom: 10,
          },
        },
      },
      // MuiInputLabel: {
      //   styleOverrides:{
      //   root: {
      //     transform: "translateY(8px) translateX(-16px) ",
      //   },}
      // },
      MuiInputBase: {
        styleOverrides: {
          sizeSmall: {
            minHeight: 37,
          },
        },
      },
    },
  },
};

export default themesConfig;
