import type { User as UserLib } from "@admin-dashboard/shared";

export type User = Omit<UserLib, "password">;
