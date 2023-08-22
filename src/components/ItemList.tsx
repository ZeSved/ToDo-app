import checked_image from '../images/_checked_ symbol.png'
import delete_image from '../images/_delete_ symbol.png'
import styles from './styles/ItemList.module.css'
import unchecked_image from '../images/_unchecked_ symbol.png'

export default function ItemList({ items, setItems }: ItemListProps) {
	return (
		<div className={styles.container}>
			{items.map((item, i) => (
				<div
					className={styles.itemContainer}
					key={i}>
					<button
						onClick={() => {
							const newArr = [...items]
							newArr[i].checked = !item.checked
							setItems(newArr)
						}}
						className={styles.checkBtn}>
						<img
							src={item.checked ? checked_image : unchecked_image}
							alt=''
						/>
					</button>
					<p className={styles.itemContent}>{item.content}</p>

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
				</div>
			))}
		</div>
	)
}

export interface ItemListProps {
	items: Item[]
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

export type Item = {
	checked: boolean
	content: string
}
