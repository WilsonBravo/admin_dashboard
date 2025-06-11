import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";

import { Box } from "@/common/components/components";
import { type RootState, type User, type ValueOf } from "@/common/types/types";
import { UserRole } from "@/common/enums/enums";
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { getUsersAction } from "@/modules/store/user/user-actions";

import { SearchBar } from "./components/search-bar";
import { Header } from "./components/header";
import { Table } from "./components/table/table";

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.user.users);

  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [filter, setFilter] = useState<{
    search: string;
    filteredRole: ValueOf<typeof UserRole> | "";
  }>({
    search: "",
    filteredRole: "",
  });

  const fuse = new Fuse(users, {
    keys: ["username", "name", "email", "lastName"],
    threshold: 0.3,
  });

  const filterByRole = (role: ValueOf<typeof UserRole> | "") => {
    setFilter((prev) => ({ ...prev, filteredRole: role }));
  };

  const handleSearchTermChange = (value: string) => {
    setFilter((prev) => ({
      ...prev,
      search: value,
    }));
  };

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  useEffect(() => {
    if (filter.search == "" && filter.filteredRole == "") {
      setFilteredData(users);
      return;
    }

    let data: User[] = [];

    if (filter.search != "")
      data = fuse.search(filter.search).map((r) => r.item);

    if (filter.filteredRole != "")
      if (data.length > 0) {
        data = data.filter((user) => user.role == filter.filteredRole);
      } else {
        data = users.filter((user) => user.role == filter.filteredRole);
      }

    setFilteredData(data);
  }, [filter, users]);

  return (
    <Box sx={{ p: "20px 0" }}>
      <Header />

      <Box sx={{ p: "0 80px" }}>
        <Box>
          <SearchBar handleSearchTermChange={handleSearchTermChange} />
        </Box>
        <Table
          filteredData={filteredData}
          filter={filter}
          filterByRole={filterByRole}
        />
      </Box>
    </Box>
  );
};

export { Users };
