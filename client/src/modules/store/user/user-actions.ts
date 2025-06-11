import { createAsyncThunk } from "@reduxjs/toolkit";

import type { AsyncThunkConfig, User } from "@/common/types/types";

const authName = "users";

const getUsersAction = createAsyncThunk<User[], void, AsyncThunkConfig>(
  `${authName}/get`,
  async (_payload, { extra }) => {
    const { userService } = extra;

    return userService.get();
  }
);

export { getUsersAction };
