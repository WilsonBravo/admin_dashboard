import React, { useEffect, useState } from "react";
import { useColorScheme, useTheme } from "@mui/material";

import {
  SideBar as SideBarLib,
  Box,
  Switch,
  Icon,
  faEnvelope,
  faInbox,
  faSun,
  faMoon,
} from "@/common/components/components";

type Properties = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
};

const SideBar: React.FC<Properties> = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  const [checkedTheme, setCheckedTheme] = useState(
    theme.palette.mode == "dark"
  );

  useEffect(() => {
    setCheckedTheme(theme.palette.mode == "dark");
  }, [theme.palette.mode]);

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTheme(event.target.checked);
    setMode(event.target.checked ? "dark" : "light");
  };

  return (
    <SideBarLib
      open={open}
      toggleDrawer={toggleDrawer}
      drawerList={[
        { label: "users", icon: faEnvelope, navigateTo: "/users" },
        { label: "messages", icon: faInbox, navigateTo: "/messages" },
        { label: "settings", icon: faEnvelope, navigateTo: "/settings" },
      ]}
      footer={
        <Box
          sx={{
            padding: 2,
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon icon={faSun} />
          <Switch checked={checkedTheme} onChange={handleChangeTheme} />
          <Icon icon={faMoon} />
        </Box>
      }
    />
  );
};

export { SideBar };
