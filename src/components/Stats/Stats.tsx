import { useEffect, useState } from 'react'

import styles from './Stats.module.scss'

import { Item, List } from '../../types/types'

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
		},
		{
			property: 'Favorites: ',
			value: stats[1],
		},
		{
			property: 'Checked: ',
			value: stats[0],
		},
	]

	return (
		<>
			<div
				
				className={styles.controlPanelContainer}>
				<div className={styles.info}>
					{infoArr.map((info, i) => (
						<div key={i}>
							<p>
								{info.property} {info.value}
							</p>
							<div
								className={styles.dividerVertical}
							/>
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