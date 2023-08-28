import './App.css'

import ItemList, { Item } from './components/ItemList'

import ItemInput from './components/ItemInput'

import { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState<Item[]>([])

	useEffect(() => {
		const itemDataLoad = localStorage.getItem('itemData')
		setItems(JSON.parse(itemDataLoad!))
		console.log(JSON.parse(itemDataLoad!))
	}, [])

	useEffect(() => {
		const itemData = JSON.stringify(items)
		localStorage.setItem('itemData', itemData)
	}, [items])

	return (
		<div className='wrapper'>
			<div className='main'>
				<ItemInput
					items={items}
					setItems={setItems}
				/>
				<ItemList
					items={items}
					setItems={setItems}
				/>
			</div>
		</div>
	)
}

export default App
