import { Item } from "../components/ItemList"

export function symbolChange(
    setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>,
    setFavorite: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    items: Item[], 
    item: Item, 
    favorite: boolean,
    index: string, 
    i: number
    ) {
    const newArr = [...items]

    switch (index) {
        case 'favorite':
            newArr[i].favorite = !item.favorite
            setItems(newArr)
            break;
        case 'checked':
            newArr[i].checked = !item.checked
            setItems(newArr)
            break;
        case 'input':
            setFavorite(!favorite)
            break;
    }
}