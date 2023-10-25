import { useEffect, useState } from 'react'

import opened from '../../images/svg/dropdown_open.svg'
import closed from '../../images/svg/dropdown_closed.svg'

import styles from './ControlPanel.module.css'

import { Custom, Item } from '../../types'

export default function ControlPanel({
	items,
	controlDropDown,
	setControlDropDown,
	settings,
}: ControlPanelType) {
	const [controlPanelInfo, setControlPanelInfo] = useState<number[]>([])

	useEffect(() => {
		const tempArrFavorite: Item[] = items.filter((items) => items.favorite === true)
		const tempArrChecked: Item[] = items.filter((items) => items.checked === true)

		setControlPanelInfo([tempArrChecked.length, tempArrFavorite.length])
	}, [items])

	const infoArr: InfoArr[] = [
		{
			property: 'Items: ',
			value: items.length,
		},
		{
			property: 'Favorites: ',
			value: controlPanelInfo[1],
		},
		{
			property: 'Checked: ',
			value: controlPanelInfo[0],
		},
	]

	return (
		<>
			<div
				style={{ backgroundColor: settings[1].color }}
				className={styles.controlPanelContainer}>
				<div className={styles.info}>
					{infoArr.map((info) => (
						<>
							<p style={{ color: settings[3].color }}>
								{info.property} {info.value}
							</p>
						</>
					))}
				</div>
				<button
					style={{ backgroundColor: settings[1].color }}
					onClick={() => setControlDropDown(!controlDropDown)}
					className={styles.optionsDropdown}>
					<p style={{ color: settings[3].color }}>More</p>
					<img
						src={controlDropDown ? opened : closed}
						alt=''
					/>
				</button>
			</div>
		</>
	)
}

type ControlPanelType = {
	items: Item[]
	controlDropDown: boolean
	setControlDropDown: React.Dispatch<React.SetStateAction<boolean>>
	settings: Custom[]
}

type InfoArr = {
	property: string
	value: number
}
