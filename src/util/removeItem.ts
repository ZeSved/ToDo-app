import { AppTabs, Item } from "../types/types";

export function removeItem(i: number, arr1?: Item[], arr2?: AppTabs) {
  if (arr1) return ([...arr1] ?? arr2).splice(i, 1)
}

