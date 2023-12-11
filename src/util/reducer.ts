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
    case 'set-tab-input':
      return {
        ...list,
        tabInput: action.payload
      }
    case 'set-tabs':
      return {
        ...list,
        tabs: action.payload
      }
  }
}