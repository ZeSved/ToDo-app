import styles from './styles/Mainapp.module.css'
import delete_image from '../images/_delete_ symbol.png'
import unchecked_image from '../images/_unchecked_ symbol.png'
import checked_image from '../images/_checked_ symbol.png'

export default function Mainapp({ items, setChecked, checked }: itemsInterface) {
	function checkedBtn() {
		checked ? setChecked(false) : setChecked(true)
	}

	return (
		<div className={styles.main}>
			<textarea className={styles.itemInput} />
			<div className={styles.container}>
				{items.map((item, i) => (
					<div
						className={styles.itemContainer}
						key={i}>
						<button
							className={styles.checkBtn}
							onClick={checkedBtn}>
							<img
								src={checked ? checked_image : unchecked_image}
								alt=''
							/>
						</button>
						<p className={styles.itemContent}>{item.content}</p>

						<button
							className={styles.deleteBtn}
							onClick={item.deleteBtn}>
							<img
								src={delete_image}
								alt=''
							/>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

interface itemsInterface {
	items: itemsType[]
	checked: boolean
	setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export type itemsType = {
	content: string
	deleteBtn: () => void
}
