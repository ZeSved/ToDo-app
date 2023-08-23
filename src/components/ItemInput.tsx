import styles from './styles/ItemInput.module.css'
import { useState } from 'react'
import { ItemListProps } from './ItemList'

export default function ItemInput({ items, setItems }: ItemListProps) {
	const [input, setInput] = useState('')

	return (
		<div>
			<textarea
				placeholder='Type here to begin...'
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						setItems([
							...items,
							{
								content: `${input}`,
								checked: false,
							},
						])
					}
				}}
				className={styles.itemInput}
			/>
		</div>
	)
}
