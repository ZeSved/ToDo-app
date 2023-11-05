import { useEffect, useState } from 'react'

import styles from './Stats.module.scss'

import { Item, List } from '../../../types/types'

export default function Stats({ list }: StatsProps) {
	const [stats, setStats] = useState<number[]>([])

	useEffect(() => {
		const tempArrFavorite: Item[] = list.items.filter((items) => items.favorite === true)
		const tempArrChecked: Item[] = list.items.filter((items) => items.checked === true)

		setStats([tempArrChecked.length, tempArrFavorite.length])
	}, [list.items])

	const infoArr: InfoArr[] = [
		{
			property: 'Items: ',
			value: list.items.length,
			divider: list.currentTheme[0].color,
		},
		{
			property: 'Favorites: ',
			value: stats[1],
			divider: list.currentTheme[0].color,
		},
		{
			property: 'Checked: ',
			value: stats[0],
			divider: list.currentTheme[0].color,
		},
		{
			property: 'Current Theme: ',
			value: list.mode,
		},
	]

	return (
		<>
			<div
				style={{ backgroundColor: list.currentTheme[1].color }}
				className={styles.controlPanelContainer}>
				<div className={styles.info}>
					{infoArr.map((info, i) => (
						<div key={i}>
							<p style={{ color: list.currentTheme[3].color }}>
								{info.property} {info.value}
							</p>
							<div
								className={styles.dividerVertical}
								style={{ background: info.divider }}></div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

type StatsProps = {
	list: List
}

type InfoArr = {
	divider?: string
	property: string
	value: number | string
}
