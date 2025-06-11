import React, { useState } from "react";

import {
  Table as TableLib,
  Modal,
  Icon,
  faLock,
  faLockOpen,
} from "@/common/components/components";
import { type User, type ValueOf } from "@/common/types/types";
import { UserRole } from "@/common/enums/enums";

import { HeaderStart } from "./header-start";
import { Selected } from "./selected";
import { headCellUsers } from "../../mock-data";
import { UserInfoModal } from "./user-info-modal";

type Properties = {
  filteredData: User[];
  filter: {
    search: string;
    filteredRole: ValueOf<typeof UserRole> | "";
  };
  filterByRole: (role: ValueOf<typeof UserRole> | "") => void;
};

const Table: React.FC<Properties> = ({
  filteredData,
  filter,
  filterByRole,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  return (
    <>
      <TableLib
        rows={filteredData}
        headCells={headCellUsers}
        defaultSortKey="username"
        headerActions={{
          start: (
            <HeaderStart
              role={filter.filteredRole}
              filterByRole={filterByRole}
            />
          ),
          selected: <Selected selectedRows={selectedRows} />,
        }}
        onClickRow={(id: string) => {
          setUser(filteredData.find((user) => user.id === id));
          setOpenModal(true);
        }}
        onSelected={(rows) => setSelectedRows(rows)}
        iconForTrue={<Icon icon={faLock} />}
        iconForFalse={<Icon icon={faLockOpen} />}
        options={{
          colors: {
            boolean: {
              true: "warning",
              false: "gray",
            },
            string: [
              { value: "ADMIN", color: "success" },
              { value: "STAFF", color: "info" },
              { value: "COSTUMER", color: "hotpink" },
            ],
            null: "gray",
          },
        }}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <UserInfoModal user={user} />
      </Modal>
    </>
  );
};

export { Table };
