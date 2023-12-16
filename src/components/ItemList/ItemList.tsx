import ItemButtons from './fragments/ItemButtons'

import styles from './ItemList.module.scss'
import '../placeholders/Placeholder.module.scss'

import { Action, List } from '../../types/types'
import Placeholders from '../placeholders/Placeholder'

export default function ItemList({ list, dispatch, onMobile }: ItemListProps) {
	return (
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
							onMobile={onMobile}
						/>
					</div>
				</div>
			))}
			{list.items.length <= 5 && <Placeholders amount={list.items.length} />}
		</div>
	)
}

export interface ItemListProps {
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
