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
import Buttons from '../../../fragments/Buttons'

export default function ItemButtons({ item, i, list, dispatch, onMobile }: ItemButtonsProps) {
	const [isOpen, setIsOpen] = useState(false)

	const buttons = [
		{
			style: styles.deleteBtn,
			func: () => {
				const newArr = [...list.items]
				newArr.splice(i, 1)
				dispatch({
					type: 'set-items',
					payload: newArr,
				})
				setIsOpen(false)
			},
			img: del,
		},
		{
			style: styles.favoriteBtn,
			func: () => {
				symbolChange(item, 'favorite', i, dispatch, list)
				setIsOpen(false)
			},
			img: item.favorite ? fav : nofav,
		},
		{
			style: styles.checkBtn,
			func: () => {
				symbolChange(item, 'checked', i, dispatch, list)
			},
			img: item.checked ? check : uncheck,
		},
	]

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
		const arr = list.tabs.findIndex((a) => a.tabName === window.localStorage.getItem('lastOpened'))

		const tabArr = [...list.tabs]

		if (list.items.filter((l) => l.checked === false).length === 0) {
			tabArr[arr].allChecked = true
		} else {
			tabArr[arr].allChecked = false
		}

		dispatch({ type: 'set-tabs', payload: tabArr })
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
			<div className={onMobile ? (isOpen ? styles.mobileFrag : styles.display) : styles.pcFrag}>
				<Buttons btn={buttons} />
			</div>
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
