import React, { useState } from "react";

import { Box, RouterOutlet } from "@/common/components/components";

import { Header } from "./components/header";
import { SideBar } from "./components/sidebar";

const RootLayout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Header toggleDrawer={() => toggleDrawer(true)} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <RouterOutlet />
    </Box>
  );
};

export { RootLayout };
