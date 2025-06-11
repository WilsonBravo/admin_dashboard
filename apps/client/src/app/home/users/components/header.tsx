import React, { useState } from "react";

import {
  Header as HeaderLib,
  Typography,
  Box,
  Button,
  Modal,
} from "@/common/components/components";

import { CreateUserModal } from "./create-user-modal";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderLib
        start={<Typography variant="h5">Users Management</Typography>}
        end={
          <Box>
            <Button
              variant="contained"
              color="success"
              onClick={() => setOpen(true)}
            >
              New User
            </Button>
          </Box>
        }
        shadow={false}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateUserModal />
      </Modal>
    </>
  );
};

export { Header };
