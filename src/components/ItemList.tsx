import ItemButtons from './ItemButtons'

import styles from './styles/ItemList.module.css'

export default function ItemList({ items, setItems }: ItemListProps) {
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
							items={items}
							setItems={setItems}
							item={item}
							i={i}
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
}

export type Item = {
	checked: boolean
	content: string
	favorite: boolean
}
