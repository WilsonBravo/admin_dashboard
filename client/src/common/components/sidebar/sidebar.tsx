import React from "react";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "../mui-material/mui-material";
import { Icon } from "../icon/icon";

type Properties = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
  drawerList: {
    label: string;
    icon: IconDefinition;
    navigateTo: string;
    disabled: boolean;
  }[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const SideBar: React.FC<Properties> = ({
  open,
  toggleDrawer,
  drawerList,
  header,
  footer,
}) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {drawerList.map(({ label, icon, disabled }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton disabled={disabled}>
              <ListItemIcon>
                <Icon icon={icon} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      sx={{ display: "flex", flexDirection: "column" }}
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      {header && <Box>{header}</Box>}
      {DrawerList}
      {footer && (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          {footer}
        </Box>
      )}
    </Drawer>
  );
};

export { SideBar };
