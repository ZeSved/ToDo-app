import { Custom, Item } from '../../../../../types'

import styles from '../ClearItems.module.scss'

export default function ClearButtons({
	currentTheme,
	// warningDisplay,
	// setWarningDisplay,
	// items,
	clearButtons,
}: // setClearButtons,
ClearButtonsType) {
	return (
		<div
			className={clearButtons ? styles.clearButtonsContainer : styles.display}
			style={{ background: currentTheme[1].color }}>
			<button style={{ background: currentTheme[2].color }}>All</button>
			<button style={{ background: currentTheme[2].color }}>
				Only{' '}
				{
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 30 30'
						fill='none'>
						<path
							d='M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58333 14.9167L12.6667 22ZM3.33333 30C2.41667 30 1.63194 29.6736 0.979167 29.0208C0.326389 28.3681 0 27.5833 0 26.6667V3.33333C0 2.41667 0.326389 1.63194 0.979167 0.979167C1.63194 0.326389 2.41667 0 3.33333 0H26.6667C27.5833 0 28.3681 0.326389 29.0208 0.979167C29.6736 1.63194 30 2.41667 30 3.33333V26.6667C30 27.5833 29.6736 28.3681 29.0208 29.0208C28.3681 29.6736 27.5833 30 26.6667 30H3.33333ZM3.33333 26.6667H26.6667V3.33333H3.33333V26.6667Z'
							fill={currentTheme[0].color}
						/>
					</svg>
				}
			</button>
		</div>
	)
}

type ClearButtonsType = {
	currentTheme: Custom[]
	warningDisplay: string | undefined
	setWarningDisplay: React.Dispatch<React.SetStateAction<string | undefined>>
	items: Item[]
	clearButtons: boolean
	setClearButtons: React.Dispatch<React.SetStateAction<boolean>>
}