import { Action, Tab } from "../types/types";

export default function reducer(tab: Tab, action: Action): Tab {
  switch (action.type) {
    case "set-items":
      // switch (action.payload.type) {
      //   case 'parent':
      //     return {
      //       ...tab,
      //       items: action.payload.payload
      //     }
      //   case 'child':
      //     return {
      //       ...tab,
      //       items: 
      //         {
      //           ...tab.items,
      //           subItems: action.payload.payload
      //         }
      //     }
      // }
      return {
        ...tab,
        items: action.payload
      }
    case "set-input":
      return {
        ...tab,
        input: action.payload
      }
    case 'set-favorite':
      return {
        ...tab,
        favorite: action.payload
      }
    case 'set-name':
      return {
        ...tab,
        name: action.payload
      }
    case 'set-selected':
      return {
        ...tab,
        isSelected: action.payload
      }
  }
}