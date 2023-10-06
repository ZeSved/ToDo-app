import checked_image from '../images/_checked_ symbol.svg'
import delete_image from '../images/_delete_ symbol.svg'
import unchecked_image from '../images/_unchecked_ symbol.svg'
import favorite_image from '../images/_favorite_ symbol.svg'
import unfavorite_image from '../images/_unfavorite_ symbol.svg'

import styles from './styles/ItemList.module.css'

export default function ItemList({ items, setItems }: ItemListProps) {
	function symbolChange(index: boolean, i: number, item: Item) {
		const newArr = [...items]

		if (index) {
			newArr[i].favorite = !item.favorite
		} else {
			newArr[i].checked = !item.checked
		}

		setItems(newArr)
	}

	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<div
					className={styles.itemContainer}
					key={i}>
					<p className={styles.itemContent}>{item.content}</p>
					<div className={styles.controls}>
						<button
							className={styles.deleteBtn}
							onClick={() => {
								const newArr = [...items]
								newArr.splice(i, 1)
								setItems(newArr)
							}}>
							<img
								src={delete_image}
								alt=''
							/>
						</button>
						<div className={styles.divider} />
						<button
							className={styles.favoriteBtn}
							onClick={() => symbolChange(true, i, item)}>
							<img
								src={item.favorite ? favorite_image : unfavorite_image}
								alt={item.favorite ? 'Favorite' : 'Not favorite'}
							/>
						</button>
						<div className={styles.divider} />
						<button
							onClick={() => symbolChange(false, i, item)}
							className={styles.checkBtn}>
							<img
								src={item.checked ? checked_image : unchecked_image}
								alt={item.checked ? 'Checked' : 'Unchecked'}
							/>
						</button>
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
