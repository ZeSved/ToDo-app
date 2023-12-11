import { Action, List } from '../types/types'
import { typeURL } from './getTargetURL'

export function addItem(
  dispatch: React.Dispatch<Action>,
  list: List,
  tabs: boolean
) {
  if (tabs) {
    const newArr = list.tabs

    newArr.unshift({
      tabName: list.tabInput,
      tabURL: typeURL(list.tabInput),
      isSelected: true
    })
    dispatch({ type: 'set-tabs', payload: newArr })
  } else {
    const newArr = list.items

    list.favorite ? newArr.unshift({
      content: `${list.input}`,
      checked: false,
      favorite: list.favorite,
      subItems: []
    }) : newArr.push({
      content: `${list.input}`,
      checked: false,
      favorite: list.favorite,
      subItems: []
    })
    dispatch({ type: 'set-items', payload: newArr })
  }

  list.favorite && dispatch({ type: 'set-favorite', payload: false })
}