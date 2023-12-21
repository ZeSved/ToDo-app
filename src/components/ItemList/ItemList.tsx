import ItemButtons from './fragments/ItemButtons'

import styles from './ItemList.module.scss'

import { Action, List } from '../../types/types'

export default function ItemList({ list, dispatch }: ItemListProps) {
	return (
		<div className={styles.scrollContainer}>
			<div className={styles.container}>
				{list.items.map((item, i) => (
					<div
						className={styles.itemContainer}
						key={i}>
						<p className={item.checked ? styles.itemContentChecked : styles.itemContent}>
							{item.content}
						</p>
						<div className={styles.controls}>
							<ItemButtons
								dispatch={dispatch}
								list={list}
								item={item}
								i={i}
							/>
						</div>
					</div>
				))}
				{list.items.length <= 4 && <div className={styles.placeholder} />}
				{list.items.length <= 3 && <div className={styles.placeholder} />}
				{list.items.length <= 2 && <div className={styles.placeholder} />}
				{list.items.length <= 1 && <div className={styles.placeholder} />}
				{list.items.length === 0 && <div className={styles.placeholder} />}
			</div>
		</div>
	)
}

export interface ItemListProps {
	dispatch: React.Dispatch<Action>
	list: List
}
