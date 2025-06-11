import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  createUserSchema,
  type CreateUserSchema,
} from "../validations/create-user.schema";

const CreateUserModal: React.FC = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = (payload: CreateUserSchema) => {
    console.log(payload);
  };

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
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
            <TextField
              label="Name"
              variant="outlined"
              error={errors.name ? true : false}
              helperText={errors.name?.message}
              {...register("name", { required: true })}
            />
            <TextField
              label="Username"
              variant="outlined"
              error={errors.username ? true : false}
              helperText={errors.username?.message}
              {...register("username", { required: true })}
            />
            <TextField
              label="Organization"
              variant="outlined"
              error={errors.organization ? true : false}
              helperText={errors.organization?.message}
              {...register("organization", { required: true })}
            />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Last Name"
              variant="outlined"
              error={errors.lastName ? true : false}
              helperText={errors.lastName?.message}
              {...register("lastName", { required: true })}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              {...register("email", { required: true })}
            />
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
              type={showPassword.password ? "text" : "password"}
              sx={{ "& > *": { p: 0 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton
                      size="small"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          password: !prev.password,
                        }))
                      }
                    >
                      <Icon icon={showPassword.password ? faEye : faEyeSlash} />
                    </IconButton>
                  ),
                },
              }}
              error={errors.password ? true : false}
              helperText={errors.password?.message}
              {...register("password", { required: true })}
            />
          </Box>
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type={showPassword.confirmPassword ? "text" : "password"}
              sx={{ "& > *": { p: 0 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton
                      size="small"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        }))
                      }
                    >
                      <Icon
                        icon={showPassword.confirmPassword ? faEye : faEyeSlash}
                      />
                    </IconButton>
                  ),
                },
              }}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword?.message}
              {...register("confirmPassword", { required: true })}
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
            <TextField
              label="Role"
              variant="outlined"
              error={errors.role ? true : false}
              helperText={errors.role?.message}
              {...register("role", { required: true })}
              select
              defaultValue={UserRole.COSTUMER}
              fullWidth
            >
              {Object.keys(UserRole).map((key) => (
                <MenuItem value={key}>{key}</MenuItem>
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
