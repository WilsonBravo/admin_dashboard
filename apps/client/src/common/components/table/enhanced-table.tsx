import React from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Checkbox,
  FormControlLabel,
  Switch,
  Typography,
} from "../mui-material/mui-material";

import { type HeadCell, type Options, type Order } from "./types/types";
import { getCellColor, getCellValue, getComparator } from "./helpers/helpers";
import { EnhancedTableToolbar } from "./table-toolbar";
import { EnhancedTableHead } from "./table-head";

type Properties<T> = {
  rows: T[];
  headCells: HeadCell<T>[];
  defaultSortKey: keyof T;
  headerActions?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
    selected?: React.ReactNode;
  };
  onClickRow?: (id: string) => void;
  onSelected?: (selectedRows: string[]) => void;
  maxCellChar?: number;
  iconForTrue?: React.ReactNode | null;
  iconForFalse?: React.ReactNode | null;
  options?: Options;
};

export const EnhancedTable = <T extends { id: string }>({
  rows,
  headCells,
  defaultSortKey,
  headerActions = {
    start: null,
    end: null,
    selected: null,
  },
  onClickRow = () => {},
  onSelected = () => {},
  maxCellChar = 10,
  iconForTrue = null,
  iconForFalse = null,
  options = {
    colors: {
      boolean: {
        true: "info",
        false: "gray",
      },
      null: "gray",
    },
  },
}: Properties<T>) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof T>(defaultSortKey);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      onSelected([...newSelected]);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
    onSelected([...newSelected]);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          headerActions={headerActions}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy as string}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = selected.includes(row.id);
                const keys = Object.keys(row) as (keyof T)[];

                return (
                  <TableRow
                    hover
                    onClick={() => onClickRow(row.id)}
                    role="row"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleClick(event, row.id);
                        }}
                      />
                    </TableCell>
                    {keys
                      .filter((key) => key !== "id")
                      .map((key, index) => {
                        const { cellValue, type } = getCellValue({
                          value: row[key as keyof T] as
                            | string
                            | number
                            | boolean
                            | null,
                          maxCellChar,
                          iconForTrue,
                          iconForFalse,
                        });

                        return (
                          <TableCell
                            key={index}
                            align={
                              typeof cellValue === "number" ? "right" : "left"
                            }
                            padding={index == 0 ? "none" : "normal"}
                          >
                            <Typography
                              color={getCellColor({
                                options,
                                type,
                                cellValue,
                              })}
                            >
                              {cellValue}
                            </Typography>
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};
