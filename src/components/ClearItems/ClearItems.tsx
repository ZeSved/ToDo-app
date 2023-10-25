import styles from './ClearItems.module.css'
import { Custom, Item } from '../../types'

export default function ClearItems({
	setItems,
	display,
	setDisplay,
	items,
	setToast,
	settings,
}: ClearItemsProps) {
	const tempArr: Item[] = items.filter((items) => items.favorite === true)

	return (
		<div className={display ? styles.blur : styles.display}>
			<div
				style={{ border: `2px solid ${settings[1].color}`, background: settings[0].color }}
				className={styles.clear_popup}>
				<h2 style={{ color: settings[3].color }}>Are you sure you want to proceed?</h2>
				<h2 style={{ color: settings[3].color }}>This will delete all items permanently.</h2>
				<div
					style={{ backgroundColor: settings[2].color, color: settings[3].color }}
					className={tempArr.length ? styles.warningDisplay : styles.display}>
					<p>NOTE: There are {tempArr.length} favorites!</p>
				</div>
				<div className={styles.btnContainer}>
					<button
						style={{ backgroundColor: settings[2].color, color: settings[3].color }}
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
						style={{
							border: `2px solid ${settings[2].color}`,
							background: settings[0].color,
							color: settings[3].color,
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
	settings: Custom[]
}
