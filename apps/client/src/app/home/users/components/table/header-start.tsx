import React from "react";

import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@/common/components/components";
import { UserRole } from "@/common/enums/enums";
import { type ValueOf } from "@/common/types/types";

type Properties = {
  role: ValueOf<typeof UserRole> | "";
  filterByRole: (role: ValueOf<typeof UserRole> | "") => void;
};

const HeaderStart: React.FC<Properties> = ({ role, filterByRole }) => {
  const userRoleKeys = Object.keys(UserRole);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="h6">Role:</Typography>
      <Box>
        {userRoleKeys.map((key, index) => (
          <Button
            key={index}
            variant={role == key ? "contained" : "outlined"}
            disabled={role == key}
            sx={{ borderRadius: 0 }}
            onClick={() => filterByRole(key as ValueOf<typeof UserRole>)}
          >
            {key}
          </Button>
        ))}

        {role && (
          <IconButton size="small" onClick={() => filterByRole("")}>
            x
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export { HeaderStart };
