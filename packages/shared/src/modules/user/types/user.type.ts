import { ValueOf } from "@/common/types/value-of.type.js";

import { UserRole } from "../user.js";

export type User = {
  id: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: ValueOf<typeof UserRole>;
  organization: string | null;
  locked: boolean;
};
