export function descendingComparator<T, K extends keyof T>(
  a: T,
  b: T,
  orderBy: K
): number {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
