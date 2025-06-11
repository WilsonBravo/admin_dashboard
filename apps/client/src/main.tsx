import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

import "@fontsource/inter/300.css";

import { RouterProvider } from "@/common/components/components";
import { routes } from "@/router/routes";
import { GlobalStyles, theme } from "@/modules/theme/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <RouterProvider routes={routes} />
    </ThemeProvider>
  </StrictMode>
);
