import styles from './ItemButtons.module.scss'

import opened from '../../../images/dropdown_open.svg'
import closed from '../../../images/dropdown_closed.svg'
import del from '../../../images/_delete_ symbol.svg'
import fav from '../../../images/favorite logo.svg'
import nofav from '../../../images/un-favorite logo (1).svg'
import check from '../../../images/_checked_ symbol.svg'
import uncheck from '../../../images/_unchecked_ symbol.svg'

import { Action, Item, List } from '../../../types/types'
import { useEffect, useState } from 'react'
import { symbolChange } from '../../../util/symbolChange'
import { getTargetTab } from '../../../util/getTargetTab'
// import { removeItem } from '../../../util/removeItem'

export default function ItemButtons({
	item,
	i,
	list,
	dispatch,
	onMobile,
}: ItemButtonsProps) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const newArr = [...list.items]

		if (item.favorite === true) {
			newArr.splice(0, 0, newArr[i])
			newArr.splice(i + 1, 1)
		}

		if (item.favorite === false) {
			newArr.splice(newArr.length, 0, newArr[i])
			newArr.splice(i, 1)
		}

		dispatch({ type: 'set-items', payload: newArr })
	}, [item.favorite])

	useEffect(() => {
		if (list.items.filter((l) => l.checked === false).length === 0) {
			const arr = list.tabs.findIndex(
				(a) => a.tabName === window.localStorage.getItem('lastOpened')
			)

			const tabArr = [...list.tabs]
			tabArr[arr].allChecked = true

			dispatch({ type: 'set-tabs', payload: tabArr })
			// list.tabs[
			// 	list.tabs.findIndex(
			// 		(a) => a.tabName === window.localStorage.getItem('lastOpened')
			// 	)
			// ].allChecked = true
		}
	}, [item.checked])

	return (
		<>
			<button
				className={onMobile ? styles.isOpen : styles.display}
				onClick={() => setIsOpen(!isOpen)}>
				<img
					className={styles.isOpenImg}
					src={isOpen ? opened : closed}
					alt=''
				/>
			</button>
			<div
				className={
					onMobile
						? isOpen
							? styles.mobileFrag
							: styles.display
						: styles.pcFrag
				}>
				<button
					className={styles.deleteBtn}
					onClick={() => {
						const newArr = [...list.items]
						newArr.splice(i, 1)
						if (newArr.length === 0) {
							dispatch({ type: 'set-items', payload: [] })
							window.localStorage.setItem(getTargetTab(list.tabs), '[]')
						} else {
							dispatch({
								type: 'set-items',
								payload: newArr,
							})
						}
						setIsOpen(false)
					}}>
					{
						<img
							src={del}
							alt=''
						/>
					}
				</button>
				<div className={styles.dividerVertical} />
				<button
					className={styles.favoriteBtn}
					onClick={() => {
						symbolChange(item, 'favorite', i, dispatch, list)
						setIsOpen(false)
					}}>
					{item.favorite ? (
						<img
							src={fav}
							alt=''
						/>
					) : (
						<img
							src={nofav}
							alt=''
						/>
					)}
				</button>
			</div>
			<div className={styles.dividerVertical} />
			<button
				onClick={() => {
					symbolChange(item, 'checked', i, dispatch, list)
				}}
				className={styles.checkBtn}>
				{item.checked ? (
					<img
						src={check}
						alt=''
					/>
				) : (
					<img
						src={uncheck}
						alt=''
					/>
				)}
			</button>
		</>
	)
}

interface ItemButtonsProps {
	item: Item
	i: number
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
