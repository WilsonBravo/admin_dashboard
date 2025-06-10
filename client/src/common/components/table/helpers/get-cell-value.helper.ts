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
}: Properties) => {
  let cellValue: string | number | React.ReactNode = "";

  if (value == null) cellValue = "N/A";

  if (typeof value == "string") {
    const rowValue = value as string;
    cellValue =
      rowValue.length > maxCellChar
        ? rowValue.slice(0, maxCellChar) + "…"
        : rowValue;
  }
  if (typeof value == "number") {
    cellValue = value as number;
  }
  if (typeof value == "boolean") {
    cellValue = value ? (iconForTrue ?? "YES") : (iconForFalse ?? "NO");
  }

  return cellValue;
};
