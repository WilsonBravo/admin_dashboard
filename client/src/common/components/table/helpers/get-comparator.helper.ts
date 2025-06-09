import { type Order } from "../types/types";
import { descendingComparator } from "./descending-comparator.helper";

export const getComparator = <T, Key extends keyof T>(
  order: Order,
  orderBy: Key
): ((a: T, b: T) => number) => {
  return order === "desc"
    ? (a, b) => descendingComparator<T, Key>(a, b, orderBy)
    : (a, b) => -descendingComparator<T, Key>(a, b, orderBy);
};
