import { AppTabs, Item } from "../types/types";

export function removeItem(i: number, arr: Item[] | AppTabs[]) {
  return [...arr].splice(i, 1)
}

