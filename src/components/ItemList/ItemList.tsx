import ItemButtons from './ItemButtons/ItemButtons'

import styles from './ItemList.module.scss'

import { Custom, Item, Mode } from '../../types'

export default function ItemList({
	items,
	setItems,
	setFavorite,
	favorite,
	currentTheme,
	mode,
}: ItemListProps) {
	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<div
					className={styles.itemContainer}
					style={{ border: `2px solid ${currentTheme[1].color}` }}
					key={i}>
					<p
						style={
							item.checked
								? {
										color: currentTheme[3].color,
										background: `linear-gradient(90deg,
							${mode.lightMode ? '#ffffff' : currentTheme[0].color} 60%,
							${mode.lightMode ? '#000000' : currentTheme[2].color + '50'} 80%,
							${mode.lightMode ? '#000000' : currentTheme[2].color} 100%)`,
								  }
								: {
										color: mode.lightMode ? '#000000' : currentTheme[3].color,
										background: mode.lightMode ? '#ffffff' : currentTheme[0].color,
								  }
						}
						className={item.checked ? styles.itemContentChecked : styles.itemContent}>
						{item.content}
					</p>
					<div
						style={{ backgroundColor: currentTheme[1].color }}
						className={styles.controls}>
						<ItemButtons
							currentTheme={currentTheme}
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
	currentTheme: Custom[]
	mode: Mode
}
