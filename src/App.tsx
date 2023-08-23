import './App.css'

import ItemList, { Item } from './components/ItemList'

import ItemInput from './components/ItemInput'

import { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState<Item[]>([
		{
			content: 'something',
			checked: false,
		},
		{
			content: 'something2',
			checked: false,
		},
		{
			content: 'something3',
			checked: false,
		},
		{
			content: 'something4',
			checked: false,
		},
		{
			content: 'something5',
			checked: false,
		},
	])

	useEffect(() => {
		const itemData = JSON.stringify(items)
		localStorage.setItem('itemData', itemData)
		console.log(itemData)
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
