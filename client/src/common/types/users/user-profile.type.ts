import { UserRole } from "@/common/enums/enums";
import { type ValueOf } from "../value-of.type";

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  name: string;
  lastName: string;
  role: ValueOf<typeof UserRole>;
  organization: string | null;
};
