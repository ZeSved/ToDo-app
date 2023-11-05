import { Action, List } from '../types/types'

export function addItem(
  dispatch: React.Dispatch<Action>,
  list: List
) {
  if (list.favorite) {
    dispatch({
      type: 'set-items',
      payload: [
        {
          content: `${list.input}`,
          checked: false,
          favorite: list.favorite,
        },
        ...list.items,
      ]
    })
  } else {
    dispatch({
      type: 'set-items',
      payload: [
        ...list.items,
        {
          content: `${list.input}`,
          checked: false,
          favorite: list.favorite,
        },
      ]
    })
  }

  list.favorite && dispatch({ type: 'set-favorite', payload: false })
}