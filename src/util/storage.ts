import { Action, List } from "../types/types";

export default function storage(list: List, dispatch: React.Dispatch<Action>, specifics: boolean, operation?: string) {
    switch (specifics) {
        case false:
            dispatch({
                type: 'set-items',
                payload: JSON.parse(window.localStorage.getItem('itemDat') ?? JSON.stringify(list.items)),
            })

            dispatch({
                type: 'set-current-theme',
                payload: JSON.parse(
                    window.localStorage.getItem('settings') ?? JSON.stringify(list.currentTheme)
                ),
            })

            dispatch({
                type: 'set-custom-profile',
                payload: JSON.parse(
                    window.localStorage.getItem('customOptions') ?? JSON.stringify(list.customProfile)
                ),
            })
            break
        case true:
            switch (operation) {
                case 'items':
                    if (list.items.length > 0 && window.localStorage.getItem('itemDat')!.length > 0) {
                        window.localStorage.setItem('itemDat', JSON.stringify(list.items))
                    } else return
                    break
                case 'force':
                    window.localStorage.setItem('itemDat', '[]')
                    break
                //case 'custom options':
                //    break
                case 'settings':
                    window.localStorage.setItem('settings', JSON.stringify(list.currentTheme))
                    break
            }
    }

}