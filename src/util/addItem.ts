import { Item } from "../components/ItemList"

export function addItem(
  setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>,
  items: Item[],
  content: string,
  checked: boolean,
  favorite: boolean,
  setFavorite?: React.Dispatch<React.SetStateAction<boolean | undefined>>
) {
  if (favorite) {
    setItems([
      {
        content: `${content}`,
        checked: checked,
        favorite: favorite,
      },
      ...items,
    ])
  } else {
    setItems([
      ...items,
      {
        content: `${content}`,
        checked: checked,
        favorite: favorite,
      },
    ])
  }


  if (setFavorite === undefined) return

  favorite && setFavorite(false)
}