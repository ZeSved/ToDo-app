import { useEffect, useState } from 'react'

import opened from '../../images/svg/dropdown_open.svg'
import closed from '../../images/svg/dropdown_closed.svg'

import styles from './ControlPanel.module.css'

import { Item } from '../../types'

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
			<div className={styles.controlPanelContainer}>
				<div className={styles.info}>
					{infoArr.map((info) => (
						<>
							<p>
								{info.property} {info.value}
							</p>
							<div className={styles.infoDivider} />
						</>
					))}
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
		</>
	)
}

type ControlPanelType = {
	items: Item[]
	controlDropDown: boolean
	setControlDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

type InfoArr = {
	property: string
	value: number
}
