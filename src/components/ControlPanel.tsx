import { useEffect, useState } from "react"

import { Item } from "../types"

export default function ControlPanel({items}: ControlPanelType){
    const [controlPanelInfo, setControlPanelInfo] = useState<number[]>([])

    useEffect(() => {
        const tempArrFavorite: Item[] = items.filter(items => items.favorite === true)
        const tempArrChecked: Item[] = items.filter(items => items.checked === true)

        setControlPanelInfo([0, 0])
    }, [items])

    return (
        <div>
            <p>Items: {items.length}</p>
            <p>Favorites: {controlPanelInfo}</p>
            <p>Checked: {controlPanelInfo}</p>
        </div>
    )
}

type ControlPanelType = {
    items: Item[]
}