import React, { useEffect, useState } from "react";
import { useColorScheme, useTheme } from "@mui/material";

import {
  Box,
  SideBar,
  faEnvelope,
  faInbox,
  Typography,
  InfoCard,
  faUser,
  Icon,
  faGears,
  faGear,
  faSun,
  faMoon,
  Switch,
} from "@/common/components/components";

import { Header } from "./components/header";

const Home: React.FC = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTheme(event.target.checked);
    setMode(event.target.checked ? "dark" : "light");
  };

  return (
    <Box>
      <Header toggleDrawer={toggleDrawer(true)} />
      <SideBar
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          gap: 2,
        }}
      >
        <Box display="flex">
          <Icon icon={faGears} size="2x" />
          <Typography variant="h4">Administration Dashboard</Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <InfoCard
            icon={faUser}
            title="Users"
            description="manage your users and their permissions"
          />
          <InfoCard
            icon={faEnvelope}
            title="Users"
            description="manage your users and their permissions"
          />
          <InfoCard
            icon={faGear}
            title="Users"
            description="manage your users and their permissions"
          />
          <InfoCard
            icon={faInbox}
            title="Users"
            description="manage your users and their permissions"
          />
          <InfoCard
            icon={faInbox}
            title="Users"
            description="manage your users and their permissions"
          />
          <InfoCard
            icon={faInbox}
            title="Users"
            description="manage your users and their permissions"
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Home };
