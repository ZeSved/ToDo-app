import { Action, Item, List } from '../types/types'

export function symbolChange(
    item: Item,
    index: string,
    i: number,
    dispatch: React.Dispatch<Action>,
    list: List
) {
    const newArr = [...list.items]

    switch (index) {
        case 'favorite':
            newArr[i].favorite = !item.favorite
            dispatch({ type: 'set-items', payload: newArr })
            break;
        case 'checked':
            newArr[i].checked = !item.checked
            dispatch({ type: 'set-items', payload: newArr })
            break;
        case 'input':
            dispatch({ type: 'set-favorite', payload: !list.favorite })
            break;
    }
}