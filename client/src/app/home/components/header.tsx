import React from "react";

import {
  Box,
  Header as HeaderLib,
  Icon,
  IconButton,
  faBars,
  faSignOut,
} from "@/common/components/components";
import { images } from "@/common/constants/images.constant";

type Properties = {
  toggleDrawer: (newOpen: boolean) => void;
};

const Header: React.FC<Properties> = ({ toggleDrawer }) => {
  const Start = (
    <Box>
      <IconButton onClick={() => toggleDrawer(true)}>
        <Icon icon={faBars} />
      </IconButton>
      <IconButton>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            "& img": { width: "100%", height: "100%", objectFit: "contain" },
          }}
        >
          <img alt="logo" src={images.logo} />
        </Box>
      </IconButton>
      <IconButton>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            "& img": { width: "100%", height: "100%", objectFit: "contain" },
          }}
        >
          <img alt="lemon" src={images.lemon} />
        </Box>
      </IconButton>
    </Box>
  );
  const End = (
    <Box>
      <IconButton>
        <Icon icon={faSignOut} />
      </IconButton>
    </Box>
  );
  return <HeaderLib start={Start} end={End} />;
};

export { Header };
