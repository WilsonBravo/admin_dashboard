import React from "react";

import { Box } from "../mui-material/mui-material";

type Properties = {
  start?: React.ReactNode;
  middle?: React.ReactNode;
  end?: React.ReactNode;
  shadow?: boolean;
};

const Header: React.FC<Properties> = ({
  start = null,
  middle = null,
  end = null,
  shadow = true,
}) => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        width: "100%",
        padding: 2,
        boxShadow: shadow ? "1px 2px 15px 4px rgba(0,0,0,0.3)" : 0,
        WebkitBoxShadow: shadow ? "1px 2px 15px 4px rgba(0,0,0,0.3)" : 0,
        MozBoxShadow: shadow ? "1px 2px 15px 4px rgba(0,0,0,0.3)" : 0,
        zIndex: 100,
      }}
    >
      {start && (
        <Box flex={1} sx={{ display: "flex", justifyContent: "start" }}>
          {start}
        </Box>
      )}
      {middle && (
        <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
          {middle}
        </Box>
      )}
      {end && (
        <Box flex={1} sx={{ display: "flex", justifyContent: "end" }}>
          {end}
        </Box>
      )}
    </Box>
  );
};

export { Header };
