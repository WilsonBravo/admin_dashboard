import React, { useState } from "react";

import {
  Box,
  SideBar,
  Button,
  faEnvelope,
  faInbox,
  Typography,
  InfoCard,
  faUser,
  Icon,
  faGears,
  faGear,
} from "@/common/components/components";

import { Header } from "./components/header";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
          <Box sx={{ padding: 2 }}>
            <Button variant="contained" color="primary" fullWidth>
              Footer Button
            </Button>
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
