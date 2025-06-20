import { type RootState } from "./root-state.type";
import { type AppDispatch } from "./app-dispatch.type";
import { type extraArgument } from "@/modules/store/store";

export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};
