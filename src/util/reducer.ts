import { Action, List } from "../types/types";

export default function reducer(list: List, action: Action): List {
  switch (action.type) {
    case "set-items":
      return {
        ...list,
        items: action.payload
      }
    case "set-input":
      return {
        ...list,
        input: action.payload
      }
    case 'set-favorite':
      return {
        ...list,
        favorite: action.payload
      }
    case 'set-only-checked':
      return {
        ...list,
        onlyChecked: action.payload
      }
    case 'set-clear-buttons':
      return {
        ...list,
        clearButtons: action.payload
      }
  }
}