import './App.css'

import ItemList, { Item } from './components/ItemList'

import ItemInput from './components/ItemInput'

import { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState<Item[] | undefined>(undefined)

	const defaultValue: Item[] = []

	useEffect(() => {
		const itemDataLoad = JSON.parse(localStorage.getItem('itemDat') ?? JSON.stringify(defaultValue))
		setItems(itemDataLoad)
	}, [])

	useEffect(() => {
		if (items) {
			localStorage.setItem('itemDat', JSON.stringify(items ?? defaultValue))
		}
	}, [items])

	return (
		<div className='wrapper'>
			<div className='main'>
				{items ? (
					<>
						<ItemInput
							items={items}
							setItems={setItems}
						/>
						<ItemList
							items={items}
							setItems={setItems}
						/>
					</>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	)
}

export default App
