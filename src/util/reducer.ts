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
    case 'set-current-url':
      return {
        ...list,
        currentURL: action.payload
      }
  }
}