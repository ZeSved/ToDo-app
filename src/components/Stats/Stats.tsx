import { useEffect, useState } from 'react'

import styles from './Stats.module.scss'

import { Custom, Item, Mode } from '../../types'

export default function Stats({ items, currentTheme, mode }: StatsType) {
	const [stats, setStats] = useState<number[]>([])

	useEffect(() => {
		const tempArrFavorite: Item[] = items.filter((items) => items.favorite === true)
		const tempArrChecked: Item[] = items.filter((items) => items.checked === true)

		setStats([tempArrChecked.length, tempArrFavorite.length])
	}, [items])

	const infoArr: InfoArr[] = [
		{
			property: 'Items: ',
			value: items.length,
			divider: currentTheme[0].color,
		},
		{
			property: 'Favorites: ',
			value: stats[1],
			divider: currentTheme[0].color,
		},
		{
			property: 'Checked: ',
			value: stats[0],
			divider: currentTheme[0].color,
		},
		{
			property: 'Current Theme: ',
			value: mode.lightMode ? 'Light mode' : mode.darkMode ? 'Dark Mode' : 'Custom Mode',
		},
	]

	return (
		<>
			<div
				style={{ backgroundColor: currentTheme[1].color }}
				className={styles.controlPanelContainer}>
				<div className={styles.info}>
					{infoArr.map((info) => (
						<>
							<p style={{ color: currentTheme[3].color }}>
								{info.property} {info.value}
							</p>
							<div
								className={styles.dividerVertical}
								style={{ background: info.divider }}></div>
						</>
					))}
				</div>
			</div>
		</>
	)
}

type StatsType = {
	items: Item[]
	currentTheme: Custom[]
	mode: Mode
}

type InfoArr = {
	divider?: string
	property: string
	value: number | string
}
