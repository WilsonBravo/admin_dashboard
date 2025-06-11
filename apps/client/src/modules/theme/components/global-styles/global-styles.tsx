import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css({
      body: {
        margin: 0,
        display: "flex",
        minHeight: "100vh",
        minWidth: "320px",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
      },
      "#root": {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      },
      "input::-ms-clear, input::-ms-reveal": {
        display: "none",
      },
    })}
  />
);

export { GlobalStyles };
