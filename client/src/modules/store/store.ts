import { configureStore } from "@reduxjs/toolkit";

import { errorMiddleware } from "@/common/middlewares/middlewares";

import { rootReducer } from "./root-reducer";
import { authService } from "./auth/auth";
import { userService } from "./user/user";

const extraArgument = {
  authService,
  userService,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(errorMiddleware),
});

export { store, extraArgument };
