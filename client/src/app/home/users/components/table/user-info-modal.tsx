import React from "react";

import { Box, Typography, Link } from "@/common/components/components";
import type { User } from "@/common/types/types";

type Properties = {
  user: User | undefined;
};

const UserInfoModal: React.FC<Properties> = ({ user }) => {
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
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={50}
        height={50}
        borderRadius="50%"
        sx={{ backgroundColor: "deepskyblue", color: "white" }}
      >
        {user?.name.slice(0)[0]}
      </Box>
      <Typography>{`${user?.name} ${user?.lastName}`}</Typography>
      <Typography variant="caption" color="info">
        {user?.role}
      </Typography>
      <Typography variant="caption">
        <Link href={`mailto:${user?.email}`}>{user?.email}</Link>
        {` (${user?.username})`}
      </Typography>
      <Typography variant="caption">{user?.organization}</Typography>
      <Box>Permissions</Box>
    </Box>
  );
};

export { UserInfoModal };
