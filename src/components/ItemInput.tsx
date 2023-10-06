import { ItemListProps } from './ItemList'
import styles from './styles/ItemInput.module.css'
import { useState } from 'react'

export default function ItemInput({ items, setItems }: ItemListProps) {
	const [input, setInput] = useState('')

	function addItem() {
		if (input.trim().length === 0) return

		setItems([
			...items,
			{
				content: `${input}`,
				checked: false,
				favorite: false,
			},
		])

		setInput('')
	}

	return (
		<div className={styles.itemInputWrapper}>
			<input
				type='text'
				placeholder='Type here to begin...'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault()

						addItem()
					}
				}}
			/>
			<button
				onClick={() => addItem()}
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
		</div>
	)
}
