import React from "react";
import { useNavigate } from "react-router-dom";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from "../mui-material/mui-material";
import { Icon } from "../components";

type Properties = {
  icon: IconDefinition;
  title: string;
  description: string;
  disabled: boolean;
  navigateTo: string;
};

const InfoCard: React.FC<Properties> = ({
  icon,
  title,
  description,
  disabled,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ padding: 2, width: 300, height: 220 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ color: "primary.main" }}>
          <Icon icon={icon} size="2x" />
        </Box>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(navigateTo)}
          disabled={disabled}
        >
          See More {">"}
        </Button>
      </CardActions>
    </Card>
  );
};

export { InfoCard };
