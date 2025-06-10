import React from "react";

import { Box, Button } from "@/common/components/components";

const Selected: React.FC = () => {
  return (
    <Box display="flex" gap={2}>
      <Button color="warning" variant="contained">
        Lock
      </Button>
      <Button color="error" variant="contained">
        Delete
      </Button>
    </Box>
  );
};

export { Selected };
