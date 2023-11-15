import { SavedData, DataAction } from "../../types/types";

export default function savedDataReducer(savedData: SavedData, action: DataAction): SavedData {
    switch(action.type) {
        case 'get-items':
            return {
                ...savedData,
                items: JSON.parse(
                    window.localStorage.getItem('itemDat') ?? JSON.stringify(savedData.items)
                )
            }
        case 'get-theme':
            return {
                ...savedData,
                currentTheme: JSON.parse(
                    window.localStorage.getItem('settings') ?? JSON.stringify(savedData.currentTheme)
                )
            }
        case 'get-profile':
            return {
                ...savedData,
                currentTheme: JSON.parse(
                    window.localStorage.getItem('customOptions') ?? JSON.stringify(savedData.customProfile)
                )
            }
            }
        case 'set':
            switch(action.payload.dataType) {
                case 'items':
                    window.localStorage.setItem('itemDat', JSON.stringify(action.payload.data.length > 0 ? action.payload.data : '[]'))
                    break
                case 'theme':
                    window.localStorage.setItem('settings', JSON.stringify(action.payload.data)) 
                    break
                case 'profile':
                    window.localStorage.setItem('customOptions', JSON.stringify(action.payload.data)) 
                    break
            }
            break
    }