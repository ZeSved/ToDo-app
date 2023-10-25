import favorite_image from '../../images/svg/favorite logo.svg'
import unfavorite_image from '../../images/svg/un-favorite logo (1).svg'
import clear_symbol from '../../images/svg/_clear_ symbol.svg'

import styles from './ItemInput.module.css'

import { Custom, Item } from '../../types'
import { addItem } from '../../util/addItem'

import { useState } from 'react'

export default function ItemInput({
	items,
	setItems,
	display,
	setDisplay,
	favorite,
	setFavorite,
	settings,
}: ItemInputProps) {
	const [input, setInput] = useState('')

	function checker() {
		if (input.trim().length === 0) return
		addItem(setItems, items, input, false, favorite, setFavorite)
		setInput('')
		favorite && setFavorite(!favorite)
	}

	return (
		<>
			<div
				style={{ border: `2px solid ${settings[1].color}` }}
				className={styles.itemInputWrapper}>
				<input
					type='text'
					placeholder='Type here to begin...'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault()

							checker()
						}
					}}
				/>
				<button
					style={{ backgroundColor: settings[1].color }}
					onClick={() => checker()}
					className={styles.send}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='27'
						viewBox='0 0 32 27'
						fill='none'>
						<path
							d='M0 26.6667V0L31.6667 13.3333L0 26.6667ZM3.33333 21.6667L23.0833 13.3333L3.33333 5V10.8333L13.3333 13.3333L3.33333 15.8333V21.6667Z'
							fill='black'
						/>
					</svg>
				</button>
				<div className={styles.divider} />
				<button
					style={{ backgroundColor: settings[1].color }}
					className={styles.set_favorite}
					onClick={() => setFavorite(!favorite)}>
					<img
						src={favorite ? favorite_image : unfavorite_image}
						alt=''
					/>
				</button>
				<div className={styles.divider} />
				<button
					style={{ backgroundColor: settings[1].color }}
					onClick={() => setDisplay(!display)}
					className={styles.clear}>
					<img
						src={clear_symbol}
						alt=''
					/>
				</button>
			</div>
		</>
	)
}

interface ItemInputProps {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>
	setFavorite: React.Dispatch<React.SetStateAction<boolean>>
	items: Item[]
	display: boolean
	favorite: boolean
	settings: Custom[]
}
