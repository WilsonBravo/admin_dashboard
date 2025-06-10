import React from "react";

import {
  Header as HeaderLib,
  Typography,
  Box,
  Button,
} from "@/common/components/components";

const Header: React.FC = () => {
  return (
    <HeaderLib
      start={<Typography variant="h5">Users Management</Typography>}
      end={
        <Box>
          <Button variant="contained" color="success">
            New User
          </Button>
        </Box>
      }
      shadow={false}
    />
  );
};

export { Header };
