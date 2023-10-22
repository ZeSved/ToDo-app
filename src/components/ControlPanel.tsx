import { useEffect, useState } from 'react'

import opened from '../images/svg/dropdown_open.svg'
import closed from '../images/svg/dropdown_closed.svg'

import styles from './styles/ControlPanel.module.css'

import { Item } from '../types'

export default function ControlPanel({
	items,
	controlDropDown,
	setControlDropDown,
}: ControlPanelType) {
	const [controlPanelInfo, setControlPanelInfo] = useState<number[]>([])

	useEffect(() => {
		const tempArrFavorite: Item[] = items.filter((items) => items.favorite === true)
		const tempArrChecked: Item[] = items.filter((items) => items.checked === true)

		setControlPanelInfo([tempArrChecked.length, tempArrFavorite.length])
	}, [items])

	return (
		<div className={styles.controlPanelContainer}>
			<div className={styles.info}>
				<p>Items: {items.length}</p>
				<div className={styles.infoDivider}></div>
				<p>Favorites: {controlPanelInfo[1]}</p>
				<div className={styles.infoDivider}></div>
				<p>Checked: {controlPanelInfo[0]}</p>
				<div className={styles.infoDivider}></div>
			</div>
			<button
				onClick={() => setControlDropDown(!controlDropDown)}
				className={styles.optionsDropdown}>
				<p>More</p>
				<img
					src={controlDropDown ? opened : closed}
					alt=''
				/>
			</button>
		</div>
	)
}

type ControlPanelType = {
	items: Item[]
	controlDropDown: boolean
	setControlDropDown: React.Dispatch<React.SetStateAction<boolean>>
}
