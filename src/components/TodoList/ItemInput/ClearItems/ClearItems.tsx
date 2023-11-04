import { useState } from 'react'

import { Custom, Item } from '../../../../types'

import styles from './ClearItems.module.scss'

import ClearButtons from './fragment/ClearButtons'

// const TOAST_MESSAGE: string = 'All items have been reset and the database reset.'

export default function ClearItems({
	// setItems,
	warningDisplay,
	setWarningDisplay,
	items,
	// setToast,
	currentTheme,
}: ClearItemsProps) {
	// const [warning, setWarning] = useState<string | undefined>(undefined)
	const [clearButtons, setClearButtons] = useState(false)

	// const tempArr: Item[] = items.filter((items) => items.favorite === true)

	return (
		<>
			<button
				style={{ backgroundColor: currentTheme[1].color }}
				onClick={() => setClearButtons(!clearButtons)}
				className={styles.clear}>
				{
					<svg
						width='32'
						height='32'
						viewBox='0 0 49 49'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							y='5.65686'
							width='8'
							height='60'
							rx='4'
							transform='rotate(-45 0 5.65686)'
							fill={currentTheme[2].color}
						/>
						<rect
							x='5.65686'
							y='48.0833'
							width='8'
							height='60'
							rx='4'
							transform='rotate(-135 5.65686 48.0833)'
							fill={currentTheme[2].color}
						/>
					</svg>
				}
			</button>
			<ClearButtons
				setClearButtons={setClearButtons}
				clearButtons={clearButtons}
				items={items}
				setWarningDisplay={setWarningDisplay}
				warningDisplay={warningDisplay}
				currentTheme={currentTheme}
			/>
			{/* <div className={warningDisplay ? styles.blur : styles.display}>
				<div
					style={{
						border: `2px solid ${currentTheme[1].color}`,
						background: currentTheme[0].color,
					}}
					className={styles.clear_popup}>
					<h2 style={{ color: currentTheme[3].color }}>Are you sure you want to proceed?</h2>
					<h2 style={{ color: currentTheme[3].color }}>This will delete all items permanently.</h2>
					<div
						style={{ backgroundColor: currentTheme[2].color, color: currentTheme[3].color }}
						className={tempArr.length ? styles.warningDisplay : styles.display}>
						<p>NOTE: There are {tempArr.length} favorites!</p>
					</div>
					<div className={styles.btnContainer}>
						<button
							style={{ backgroundColor: currentTheme[2].color, color: currentTheme[3].color }}
							onClick={() => setWarningDisplay(!warningDisplay)}
							className={styles.cancelBtn}>
							No
						</button>
						<button
							onClick={() => {
								setWarningDisplay(!warningDisplay)
								setItems([])
								setTimeout(() => setToast(TOAST_MESSAGE), 50)
								setTimeout(() => setToast(undefined), 1500)
							}}
							style={{
								border: `2px solid ${currentTheme[2].color}`,
								background: currentTheme[0].color,
								color: currentTheme[3].color,
							}}
							className={styles.clearBtn}>
							Yes, delete all
						</button>
					</div>
				</div>
			</div> */}
		</>
	)
}

interface ClearItemsProps {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setWarningDisplay: React.Dispatch<React.SetStateAction<string | undefined>>
	setToast: React.Dispatch<React.SetStateAction<string | undefined>>
	warningDisplay: string | undefined
	items: Item[]
	currentTheme: Custom[]
}
