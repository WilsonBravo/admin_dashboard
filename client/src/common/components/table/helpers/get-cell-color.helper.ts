import type { Cell } from "../types/cell.type";
import type { Options } from "../types/options.type";

type Properties = {
  options: Options;
  cellValue: string | number | React.ReactNode;
  type?: Cell | null;
};

export const getCellColor = ({
  options,
  cellValue,
  type = null,
}: Properties): string => {
  if (type) {
    if (type == "true" || type == "false") return options.colors.boolean[type];
    if (type == "string") {
      const color = options.colors.string?.find(
        (item) => item.value == cellValue
      );

      return color?.color ?? "text.primary";
    }
  }
  return "text.primary";
};
