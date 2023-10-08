import styles from './styles/ClearItems.module.css'
import { Item } from './ItemList'

export default function ClearItems({ setItems, display, setDisplay }: ClearItemsProps) {
	return (
		<div className={display ? styles.blur : styles.display}>
			<div className={styles.clear_popup}>
				<h2>Are you sure you want to proceed? </h2>
				<h2>This will delete all items permanently.</h2>
				<div className={styles.btnContainer}>
					<button
						onClick={() => setDisplay(!display)}
						className={styles.cancelBtn}>
						Cancel
					</button>
					<button
						onClick={() => {
							setDisplay(!display)
							setItems([])
						}}
						className={styles.clearBtn}>
						Clear
					</button>
				</div>
			</div>
		</div>
	)
}

interface ClearItemsProps {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>
	display: boolean
}
