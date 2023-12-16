import { Action, List } from "../types/types"
import { addItem } from "./addItem"
import { unselect } from "./targets"

export function inputChecker(
  input: string,
  dispatch: React.Dispatch<Action>,
  list: List
) {
  if (input === list.input) {
    if (input.trim().length === 0) return false

    addItem(dispatch, list, false)
    dispatch({ type: 'set-input', payload: '' })

    list.favorite && dispatch({ type: 'set-favorite', payload: false })
  }
  else if (input === list.tabInput) {
    if (input.trim().length === 0) return false

    dispatch({ type: 'set-tabs', payload: targetNone(list.tabs) })
    addItem(dispatch, list, true)
    dispatch({ type: 'set-tab-input', payload: '' })
  }
}