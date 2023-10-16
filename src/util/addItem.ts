import { Item } from "../components/ItemList"

export function addItem(
  setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>,
  items: Item[],
  content: string,
  checked: boolean,
) {
  setItems([
    ...items,
    {
      content: `${content}`,
      checked: checked,
      favorite: false,
    },
  ])

  return { content, checked }
}