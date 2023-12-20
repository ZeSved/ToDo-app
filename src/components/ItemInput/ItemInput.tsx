import styles from './ItemInput.module.scss'

import { Action, List } from '../../types/types'

import fav from '../../images/favorite logo.svg'
import nofav from '../../images/un-favorite logo (1).svg'
import clear from '../../images/_clear_ symbol.svg'
import send from '../../images/send.svg'
import { inputChecker } from '../../util/inputChecker'
import { getTargetTab } from '../../util/getTargetTab'
import Buttons from '../../fragments/Buttons'

export default function ItemInput({ list, dispatch, onMobile }: ItemInputProps) {
	const buttons = [
		{
			style: styles.send,
			func: () => inputChecker(list.input, dispatch, list),
			img: send,
		},
		{
			style: styles.set_favorite,
			func: () => dispatch({ type: 'set-favorite', payload: !list.favorite }),
			img: list.favorite ? fav : nofav,
		},
		{
			style: styles.clear,
			func: () => {
				if (list.items.length > 0) {
					if (confirm('Are you sure you want to permanently delete all items?')) {
						dispatch({ type: 'set-items', payload: [] })
					}
					window.localStorage.setItem(getTargetTab(list.tabs), '[]')
				} else {
					alert('There are currently no items')
				}
			},
			img: clear,
		},
	]

	return (
		<>
			<div className={onMobile ? styles.itemInputWrapperMobile : styles.itemInputWrapper}>
				<input
					type='text'
					placeholder='Type here to begin...'
					value={list.input}
					onChange={(e) => dispatch({ type: 'set-input', payload: e.target.value })}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault()

							inputChecker(list.input, dispatch, list)
						}
					}}
				/>
				<Buttons btn={buttons} />
			</div>
		</>
	)
}

interface ItemInputProps {
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
