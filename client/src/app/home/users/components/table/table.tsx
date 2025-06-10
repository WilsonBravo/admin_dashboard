import React from "react";

import { Table as TableLib } from "@/common/components/components";
import { type User, type ValueOf } from "@/common/types/types";
import { UserRole } from "@/common/enums/enums";

import { HeaderStart } from "./header-start";
import { Selected } from "./selected";
import { headCellUsers } from "../../mock-data";

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
  return (
    <TableLib
      rows={filteredData}
      headCells={headCellUsers}
      defaultSortKey="username"
      headerActions={{
        start: (
          <HeaderStart role={filter.filteredRole} filterByRole={filterByRole} />
        ),
        selected: <Selected />,
      }}
    />
  );
};

export { Table };
