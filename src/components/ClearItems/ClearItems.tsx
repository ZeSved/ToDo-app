import styles from './ClearItems.module.css'
import { Item } from '../../types'

export default function ClearItems({ setItems, display, setDisplay, items, setToast }: ClearItemsProps) {
	const tempArr: Item[] = items.filter(items => items.favorite === true)

	return (
		<div className={display ? styles.blur : styles.display}>
			<div className={styles.clear_popup}>
				<h2>Are you sure you want to proceed?</h2>
				<h2>This will delete all items permanently.</h2>
				<div className={tempArr.length ? styles.warningDisplay : styles.display}>
					<p>NOTE: There are {tempArr.length} favorites!</p>
				</div>
				<p ></p>
				<div className={styles.btnContainer}>
					<button
						onClick={() => setDisplay(!display)}
						className={styles.cancelBtn}>
						No
					</button>
					<button
						onClick={() => {
							setDisplay(!display)
							setItems([])
							setTimeout(() => setToast(true), 50)
							setTimeout(() => setToast(false), 1500)
						}}
						className={styles.clearBtn}>
						Yes, delete all
					</button>
				</div>
			</div>
		</div>
	)
}

interface ClearItemsProps {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>
	setToast: React.Dispatch<React.SetStateAction<boolean>>
	display: boolean
	items: Item[]
}
