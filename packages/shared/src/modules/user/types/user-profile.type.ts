import { UserRole } from "@/modules/user/enums/enums.js";
import { type ValueOf } from "@/common/types/types.js";

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  name: string;
  lastName: string;
  role: ValueOf<typeof UserRole>;
  organization: string | null;
};
