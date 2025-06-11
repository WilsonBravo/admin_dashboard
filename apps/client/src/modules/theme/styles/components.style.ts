import { type ThemeOptions } from "@mui/material/styles";

const components: ThemeOptions = {
  // typography: {
  //   fontFamily: "var(--font-indie-flower)",
  //   body1: {
  //     fontFamily: "Winky Rough",
  //   },
  //   button: {
  //     fontFamily: "Winky Rough",
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        containedWarning: { backgroundColor: "#ffcc00" },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "3rem",
          height: "3rem",
        },
      },
    },
  },
};

export { components };
