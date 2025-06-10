import React from "react";

import {
  Box,
  FormControl,
  TextField,
  FormHelperText,
  Divider,
  MenuItem,
  Button,
  Icon,
  IconButton,
  faEye,
  faEyeSlash,
} from "@/common/components/components";
import { UserRole } from "@/common/enums/enums";

const CreateUserModal: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "background.default",
        width: 500,
        height: 500,
        m: "auto",
        mt: 2,
        p: 5,
        maxHeight: "90%",
        overflowY: "auto",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
        fullWidth
      >
        <FormHelperText>User Info</FormHelperText>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Username" variant="outlined" />
            <TextField label="Organization" variant="outlined" />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField label="Last Name" variant="outlined" />
            <TextField label="Email" variant="outlined" type="email" />
          </Box>
        </Box>
        <FormHelperText>Password</FormHelperText>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              sx={{ "& > *": { pr: 0 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton size="small">
                      <Icon icon={faEye} />
                    </IconButton>
                  ),
                },
              }}
            />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              sx={{ "& > *": { pr: 0 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton size="small">
                      <Icon icon={faEyeSlash} />
                    </IconButton>
                  ),
                },
              }}
            />
          </Box>
        </Box>
        <FormHelperText>User Permissions</FormHelperText>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            gap={2}
            width="100%"
          >
            <TextField label="Role" variant="outlined" select fullWidth>
              {Object.keys(UserRole).map((key) => (
                <MenuItem>{key}</MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Button variant="contained" sx={{ mt: 2 }} type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export { CreateUserModal };
