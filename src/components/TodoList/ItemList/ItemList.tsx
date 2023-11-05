import ItemButtons from './ItemButtons/ItemButtons'

import styles from './ItemList.module.scss'

import { Action, List } from '../../../types/types'

export default function ItemList({ list, dispatch }: ItemListProps) {
	return (
		<div className={styles.container}>
			{list.items.map((item, i) => (
				<div
					className={styles.itemContainer}
					style={{ border: `2px solid ${list.currentTheme[1].color}` }}
					key={i}>
					<p
						style={
							item.checked
								? {
										color: list.currentTheme[3].color,
										background: `linear-gradient(90deg,
							${list.mode === 'Light' ? '#ffffff' : list.currentTheme[0].color} 60%,
							${list.mode === 'Light' ? '#000000' : list.currentTheme[2].color + '50'} 80%,
							${list.mode === 'Light' ? '#000000' : list.currentTheme[2].color} 100%)`,
								  }
								: {
										color: list.mode === 'Light' ? '#000000' : list.currentTheme[3].color,
										background: list.mode === 'Light' ? '#ffffff' : list.currentTheme[0].color,
								  }
						}
						className={item.checked ? styles.itemContentChecked : styles.itemContent}>
						{item.content}
					</p>
					<div
						style={{ backgroundColor: list.currentTheme[1].color }}
						className={styles.controls}>
						<ItemButtons
							dispatch={dispatch}
							list={list}
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
	dispatch: React.Dispatch<Action>
	list: List
}
