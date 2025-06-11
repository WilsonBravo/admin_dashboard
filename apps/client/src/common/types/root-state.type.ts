import { type store } from "@/modules/store/store";

export type RootState = ReturnType<typeof store.getState>;
