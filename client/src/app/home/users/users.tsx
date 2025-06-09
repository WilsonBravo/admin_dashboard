import {
  Box,
  Button,
  faSearch,
  Header,
  Icon,
  TextField,
  Typography,
  Table,
} from "@/common/components/components";
import React from "react";
import { headCellUsers, users } from "./mock-data";
// import EnhancedTable from "./components/table";

const Users: React.FC = () => {
  return (
    <Box sx={{ p: "20px 0" }}>
      <Header
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

      <Box sx={{ p: "0 80px" }}>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <Box sx={{ mr: 2 }}>
                  <Icon icon={faSearch} />
                </Box>
              ),
            },
          }}
          placeholder="Search for users"
          fullWidth
        />
        <Table
          rows={users}
          headCells={headCellUsers}
          defaultSortKey="username"
          headerActions={{
            start: (
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="h6">Role:</Typography>
                <Box>
                  <Button variant="contained" sx={{ borderRadius: 0 }} disabled>
                    admin
                  </Button>
                  <Button variant="outlined" sx={{ borderRadius: 0 }}>
                    staff
                  </Button>
                  <Button variant="outlined" sx={{ borderRadius: 0 }}>
                    client
                  </Button>
                </Box>
              </Box>
            ),
            selected: (
              <Box display="flex" gap={2}>
                <Button color="warning" variant="contained">
                  Lock
                </Button>
                <Button color="error" variant="contained">
                  Delete
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export { Users };
