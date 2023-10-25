import './App.css'

import { useEffect, useState } from 'react'

import ItemInput from './components/ItemInput/ItemInput'
import ClearItems from './components/ClearItems/ClearItems'
import ItemList from './components/ItemList/ItemList'
import Toast from './components/Toast/Toast'
import ControlPanel from './components/ControlPanel/ControlPanel'
import Settings from './components/Settings/Settings'

import { Item, Custom } from '../src/types'

const DEFAULT_VALUE: Item[] = []

const DEFAULT_CUSTOM_SETTINGS: Custom[] = [
	{
		name: 'mainColor',
		color: '#000000',
	},
	{
		name: 'callToActionColor',
		color: '#fa00ff',
	},
	{
		name: 'textColor',
		color: '#ffffff',
	},
]

function App() {
	const [items, setItems] = useState<Item[] | undefined>(undefined)
	const [display, setDisplay] = useState<boolean>(false)
	const [favorite, setFavorite] = useState<boolean>(false)
	const [toast, setToast] = useState(false)
	const [controlDropDown, setControlDropDown] = useState(false)
	// const [customSettings, setCustomSettings] = useState<Custom[]>(DEFAULT_CUSTOM_SETTINGS)

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
						<div className='divider' />
						<ControlPanel
							controlDropDown={controlDropDown}
							setControlDropDown={setControlDropDown}
							items={items}
						/>
						<Settings DEFAULT_CUSTOM_SETTINGS={DEFAULT_CUSTOM_SETTINGS} />
						<ClearItems
							setToast={setToast}
							display={display}
							setDisplay={setDisplay}
							setItems={setItems}
							items={items}
						/>
						<Toast toast={toast} />
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
