import React, { useState } from "react";

import { Box, Button, Modal } from "@/common/components/components";
import { SelectedModal } from "./selected-modal";

type Properties = {
  selectedRows: string[];
};

const Selected: React.FC<Properties> = ({ selectedRows }) => {
  const [modalInfo, setModalInfo] = useState({
    open: false,
    title: "",
    description: "",
    submitValue: "",
  });

  return (
    <>
      <Box display="flex" gap={2}>
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            setModalInfo({
              open: true,
              title: "Unlock",
              description:
                "Do you want to unlock this user? They will regain access to their account.",
              submitValue: "UNLOCK",
            });
          }}
        >
          Unlock
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={() => {
            setModalInfo({
              open: true,
              title: "Lock",
              description:
                "Are you sure you want to lock this user? They won’t be able to sign in.",
              submitValue: "LOCK",
            });
          }}
        >
          Lock
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            setModalInfo({
              open: true,
              title: "Delete",
              description:
                "Are you sure you want to delete this user? This action cannot be undone.",
              submitValue: "DELETE",
            });
          }}
        >
          Delete
        </Button>
      </Box>
      <Modal
        open={modalInfo.open}
        onClose={() => setModalInfo((prev) => ({ ...prev, open: false }))}
      >
        <SelectedModal
          title={modalInfo.title}
          description={modalInfo.description}
          submitValue={modalInfo.submitValue}
          selectedRows={selectedRows}
        />
      </Modal>
    </>
  );
};

export { Selected };
