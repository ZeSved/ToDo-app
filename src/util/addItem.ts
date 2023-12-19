import { Action, List } from '../types/types'

export function addItem(
  dispatch: React.Dispatch<Action>,
  list: List,
  tabs: boolean
) {
  if (tabs) {
    const newArr = list.tabs

    newArr.unshift({
      tabName: list.tabInput,
      allChecked: false,
      isSelected: true
    })
    dispatch({ type: 'set-tabs', payload: newArr })
    window.localStorage.setItem('lastOpened', list.tabs[0].tabName)
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