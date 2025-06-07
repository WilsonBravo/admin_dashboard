import React, { useEffect, useState } from "react";
import { useColorScheme, useTheme } from "@mui/material";

import {
  SideBar as SideBarLib,
  Box,
  Switch,
  Icon,
  faSun,
  faMoon,
} from "@/common/components/components";
import { dashboard } from "@/common/constants/constants";

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

  const drawerList = dashboard.sections.map((section) => ({
    label: section.title.toLowerCase(),
    icon: section.icon,
    navigateTo: section.navigateTo,
  }));

  return (
    <SideBarLib
      open={open}
      toggleDrawer={toggleDrawer}
      drawerList={drawerList}
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
