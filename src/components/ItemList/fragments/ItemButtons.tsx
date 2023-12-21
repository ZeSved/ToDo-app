import styles from './ItemButtons.module.scss'

import del from '../../../images/_delete_ symbol.svg'
import fav from '../../../images/favorite logo.svg'
import nofav from '../../../images/un-favorite logo (1).svg'
import check from '../../../images/_checked_ symbol.svg'
import uncheck from '../../../images/_unchecked_ symbol.svg'

import { Action, Item, List } from '../../../types/types'
import { useEffect } from 'react'
import { symbolChange } from '../../../util/symbolChange'
import Buttons from '../../../fragments/Buttons'

export default function ItemButtons({ item, i, list, dispatch }: ItemButtonsProps) {
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
			},
			img: del,
		},
		{
			style: styles.favoriteBtn,
			func: () => {
				symbolChange(item, 'favorite', i, dispatch, list)
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

		if (arr === null || arr === undefined) return

		const tabArr = list.tabs

		if (list.items.filter((l) => l.checked === false).length === 0) {
			tabArr[arr].allChecked = true
		} else {
			tabArr[arr].allChecked = false
		}

		dispatch({ type: 'set-tabs', payload: tabArr })
	}, [item.checked])

	return (
		<>
			<div className={styles.pcFrag}>
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
}
