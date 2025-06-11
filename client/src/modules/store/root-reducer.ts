import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./auth/auth";
import { userReducer } from "./user/user";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export { rootReducer };
