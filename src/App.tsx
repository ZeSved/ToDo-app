import './App.css'

import { useEffect, useState } from 'react'

import ItemInput from './components/ItemInput'
import ClearItems from './components/ClearItems'
import ItemList from './components/ItemList'
import Toast from './components/Toast'

import { Item } from '../src/types'

const DEFAULT_VALUE: Item[] = []

function App() {
	const [items, setItems] = useState<Item[] | undefined>(undefined)
	const [display, setDisplay] = useState<boolean>(false)
	const [favorite, setFavorite] = useState(false)

	useEffect(() => {
		const itemDataLoad = JSON.parse(
			localStorage.getItem('itemDat') ?? JSON.stringify(DEFAULT_VALUE)
		)
		setItems(itemDataLoad)
	}, [])

	useEffect(() => {
		if (items) {
			localStorage.setItem('itemDat', JSON.stringify(items ?? DEFAULT_VALUE))
		}
	}, [items])

	return (
		<div className='wrapper'>
			<main className='main'>
				{items ? (
					<>
						<ItemInput
							display={display}
							items={items}
							favorite={favorite}
							setDisplay={setDisplay}
							setItems={setItems}
							setFavorite={setFavorite}
						/>
						<div className='divider' />
						<ItemList
							items={items}
							setItems={setItems}
							setFavorite={setFavorite}
							favorite={favorite}
						/>
						<ClearItems
							display={display}
							setDisplay={setDisplay}
							setItems={setItems}
						/>
						<Toast />
					</>
				) : (
					<p>Loading...</p>
				)}
			</main>
			<div className='blurSheet' />
			<div className='colorSheet' />
		</div>
	)
}

export default App
