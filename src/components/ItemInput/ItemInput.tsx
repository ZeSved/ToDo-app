import styles from './ItemInput.module.scss'

import { Action, List } from '../../types/types'

import fav from '../../images/favorite logo.svg'
import nofav from '../../images/un-favorite logo (1).svg'
import clear from '../../images/_clear_ symbol.svg'
import send from '../../images/send.svg'
import { inputChecker } from '../../util/inputChecker'

export default function ItemInput({ list, dispatch, onMobile }: ItemInputProps) {
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
				<button
					onClick={() => inputChecker(list.input, dispatch, list)}
					className={styles.send}>
					<img
						src={send}
						alt=''
					/>
				</button>
				<div className={styles.dividerVertical} />
				<button
					className={styles.set_favorite}
					onClick={() => dispatch({ type: 'set-favorite', payload: !list.favorite })}>
					{list.favorite ? (
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
				<div className={styles.dividerVertical} />
				<button
					onClick={() => {
						if (list.items.length > 0) {
							if (confirm('Are you sure you want to permanently delete all items?')) {
								dispatch({ type: 'set-items', payload: [] })
							}
							window.localStorage.setItem('itemDat', '[]')
						} else {
							alert('There are currently no items')
						}
					}}
					className={styles.clear}>
					<img
						src={clear}
						alt=''
					/>
				</button>
			</div>
		</>
	)
}

interface ItemInputProps {
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
