import ItemButtons from './ItemButtons/ItemButtons'

import styles from './ItemList.module.css'

import { Custom, Item } from '../../types'

export default function ItemList({
	items,
	setItems,
	setFavorite,
	favorite,
	settings,
}: ItemListProps) {
	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<div
					className={styles.itemContainer}
					style={{ border: `2px solid ${settings[1].color}` }}
					key={i}>
					<p
						style={
							item.checked
								? {
										color: settings[3].color,
										background: `linear-gradient(90deg,
							${settings[0].color} 60%,
							${settings[2].color + '50'} 80%,
							${settings[2].color} 100%)`,
								  }
								: {
										color: settings[3].color,
								  }
						}
						className={item.checked ? styles.itemContentChecked : styles.itemContent}>
						{item.content}
					</p>
					<div
						style={{ backgroundColor: settings[1].color }}
						className={styles.controls}>
						<ItemButtons
							settings={settings}
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
	settings: Custom[]
}
