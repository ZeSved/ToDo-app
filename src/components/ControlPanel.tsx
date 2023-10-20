import { useEffect, useState } from 'react'

import styles from './styles/ControlPanel.module.css'

import { Item } from '../types'

export default function ControlPanel({ items }: ControlPanelType) {
	const [controlPanelInfo, setControlPanelInfo] = useState<number[]>([])

	useEffect(() => {
		// const tempArrFavorite: Item[] = items.filter(items => items.favorite === true)
		// const tempArrChecked: Item[] = items.filter(items => items.checked === true)

		setControlPanelInfo([0, 0])
	}, [items])

	return (
		<div className={styles.controlPanelContainer}>
			<div className={styles.info}>
				<p>Items: {items.length}</p>
				<p>Favorites: {controlPanelInfo[0]}</p>
				<p>Checked: {controlPanelInfo[1]}</p>
			</div>
			<button className={styles.optionsDropdown}></button>
		</div>
	)
}

type ControlPanelType = {
	items: Item[]
}
