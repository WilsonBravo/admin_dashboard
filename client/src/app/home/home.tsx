import React from "react";

import {
  Box,
  Typography,
  InfoCard,
  Icon,
  faGears,
} from "@/common/components/components";
import { dashboard } from "@/common/constants/constants";

const Home: React.FC = () => {
  return (
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
        {dashboard.sections.map((section, index) => (
          <InfoCard
            key={index}
            icon={section.icon}
            title={section.title}
            description={section.description}
            disabled={section.disabled}
          />
        ))}
      </Box>
    </Box>
  );
};

export { Home };
