import ItemButtons from './ItemButtons'

import styles from './styles/ItemList.module.css'

import { Item } from '../types'

export default function ItemList({ items, setItems, setFavorite, favorite }: ItemListProps) {
	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<div
					className={styles.itemContainer}
					key={i}>
					<p className={item.checked ? styles.itemContentChecked : styles.itemContent}>
						{item.content}
					</p>
					<div className={styles.controls}>
						<ItemButtons
							item={item}
							items={items}
							setItems={setItems}
							i={i}
							setFavorite={setFavorite}
							favorite={favorite}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export interface ItemListProps {
	items: Item[]
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setFavorite: React.Dispatch<React.SetStateAction<boolean>>
	favorite: boolean
}
