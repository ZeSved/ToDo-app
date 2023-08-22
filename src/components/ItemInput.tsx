import { useRef } from 'react'
import { ItemListProps } from './ItemList'

export default function ItemInput({ items, setItems }: ItemListProps) {
	const ref = useRef(null)
	return (
		<div>
			<textarea
				ref={ref}
				className='itemInput'
			/>
			<button
				onClick={() => {
					setItems([
						...items,
						{
							content: `try`,
							checked: false,
						},
					])
					console.log()
				}}>
				click me
			</button>
		</div>
	)
}
