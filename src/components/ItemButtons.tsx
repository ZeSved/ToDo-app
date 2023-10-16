import checked_image from '../images/svg/_checked_ symbol.svg'
import delete_image from '../images/svg/_delete_ symbol.svg'
import unchecked_image from '../images/svg/_unchecked_ symbol.svg'
import favorite_image from '../images/svg/favorite logo.svg'
import unfavorite_image from '../images/svg/un-favorite logo (1).svg'

import styles from './styles/ItemList.module.css'

import { Item } from './ItemList'
import { useEffect } from 'react'
import { addItem } from '../util/addItem'

export default function ItemButtons({ item, items, setItems, i }: ItemButtonsProps) {
	useEffect(() => {
		const newArr = [...items]

		if (item.favorite === true) {
			newArr.splice(0, 0, newArr[i])
			newArr.splice(i + 1, 1)
			console.log(addItem(setItems, items, item.content, item.checked))
		}

		setItems(newArr)
	}, [item.favorite])

	function symbolChange(index: boolean) {
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
				onClick={() => {
					symbolChange(true)
				}}>
				<img
					src={item.favorite ? favorite_image : unfavorite_image}
					alt={item.favorite ? 'Favorite' : 'Not favorite'}
				/>
			</button>
			<div className={styles.divider} />
			<button
				onClick={() => {
					symbolChange(false)
				}}
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
