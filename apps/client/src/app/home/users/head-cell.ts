import { type HeadCell } from "@/common/components/table/types/head-cell.type";
import { type User } from "@/common/types/types";

export const headCellUsers: HeadCell<Omit<User, "password">>[] = [
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "username",
    numeric: false,
    disablePadding: false,
    label: "Username",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: false,
    label: "Last Name",
  },
  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "organization",
    numeric: false,
    disablePadding: false,
    label: "Organization",
  },
  {
    id: "locked",
    numeric: false,
    disablePadding: false,
    label: "Locked",
  },
];
