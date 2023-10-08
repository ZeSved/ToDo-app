import checked_image from '../images/svg/_checked_ symbol.svg'
import delete_image from '../images/svg/_delete_ symbol.svg'
import unchecked_image from '../images/svg/_unchecked_ symbol.svg'
import favorite_image from '../images/svg/_favorite_ symbol.svg'
import unfavorite_image from '../images/svg/_unfavorite_ symbol.svg'

import styles from './styles/ItemList.module.css'

import { Item } from './ItemList'

export default function ItemButtons({ item, items, setItems, i }: ItemButtonsProps) {
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
		<>
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
		</>
	)
}

interface ItemButtonsProps {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	item: Item
	items: Item[]
	i: number
}
