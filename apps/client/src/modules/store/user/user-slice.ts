import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "@/common/enums/enums";
import { type ValueOf, type User } from "@/common/types/types";
import { getUsersAction } from "./user-actions";

type State = {
  users: User[];
  status: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  users: [],
  status: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<ValueOf<typeof DataStatus>>) => {
      return { ...state, status: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAction.pending, (state) => {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    });
    builder.addCase(getUsersAction.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
        status: DataStatus.SUCCESS,
      };
    });
    builder.addCase(getUsersAction.rejected, (state) => {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    });
  },
});

export { reducer as userReducer, actions as userActions, name as userName };
