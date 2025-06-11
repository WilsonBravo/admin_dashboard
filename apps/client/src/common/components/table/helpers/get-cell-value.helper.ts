import type { Cell } from "../types/cell.type";

type Properties = {
  value: string | number | boolean | null;
  iconForTrue?: React.ReactNode;
  iconForFalse?: React.ReactNode;
  maxCellChar: number;
};

export const getCellValue = ({
  value,
  maxCellChar,
  iconForTrue = null,
  iconForFalse = null,
}: Properties): {
  cellValue: string | number | React.ReactNode;
  type: Cell;
} => {
  let cellValue: string | number | React.ReactNode = "";
  let type: Cell = "string";

  if (value == null) {
    cellValue = "N/A";
    type = "null";
  }

  if (typeof value == "string") {
    const rowValue = value as string;
    cellValue =
      rowValue.length > maxCellChar
        ? rowValue.slice(0, maxCellChar) + "…"
        : rowValue;
  }
  if (typeof value == "number") {
    cellValue = value as number;
    type = "number";
  }
  if (typeof value == "boolean") {
    cellValue = value ? (iconForTrue ?? "YES") : (iconForFalse ?? "NO");
    type = value ? "true" : "false";
  }

  return { cellValue, type };
};
