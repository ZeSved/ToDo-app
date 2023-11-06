import { List } from "../types/types"

export function favorites(list: List) {
  return list.items.filter((items) => items.favorite === true)
}

export function notChecked(list: List) {
  return list.items.filter((items) => items.checked !== true)
}