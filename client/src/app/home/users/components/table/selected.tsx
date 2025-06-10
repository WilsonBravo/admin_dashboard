import React, { useState } from "react";

import { Box, Button, Modal } from "@/common/components/components";

type Properties = {
  selectedRows: string[];
};

const Selected: React.FC<Properties> = ({ selectedRows }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box display="flex" gap={2}>
        <Button
          color="warning"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Lock
        </Button>
        <Button color="error" variant="contained">
          Delete
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>{JSON.stringify(selectedRows)}</Box>
      </Modal>
    </>
  );
};

export { Selected };
