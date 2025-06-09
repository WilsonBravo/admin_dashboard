import React from "react";
import { alpha } from "@mui/material";

import {
  Toolbar,
  Typography,
  Tooltip,
} from "../mui-material/mui-material";

type Properties = {
  numSelected: number;
  headerActions?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
    selected?: React.ReactNode;
  };
};

export const EnhancedTableToolbar: React.FC<Properties> = ({
  numSelected,
  headerActions = {
    start: null,
    end: null,
    selected: null,
  },
}) => {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>{headerActions.start}</>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <>{headerActions.selected}</>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <>{headerActions.end}</>
        </Tooltip>
      )}
    </Toolbar>
  );
};
