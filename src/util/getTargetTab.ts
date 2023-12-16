import { AppTabs } from "../types/types";

export function getTargetTab(arr1: AppTabs[]) {
  const list = arr1.filter(arr => arr.isSelected)
  return `Tab ${list[0].tabName}`
}