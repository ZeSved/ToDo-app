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

const settings: Custom[] = [
	{
		name: 'mainColor',
		color: '#000000',
	},
	{
		name: 'secondaryColor',
		color: '#3f3f3f',
	},
	{
		name: 'callToActionColor',
		color: '#0c00ff',
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
							settings={settings}
							display={display}
							items={items}
							favorite={favorite}
							setDisplay={setDisplay}
							setItems={setItems}
							setFavorite={setFavorite}
						/>
						<div
							className='divider'
							style={{ background: settings[2].color }}
						/>
						<ItemList
							settings={settings}
							items={items}
							setItems={setItems}
							setFavorite={setFavorite}
							favorite={favorite}
						/>
						<div
							className='divider'
							style={{ background: settings[2].color }}
						/>
						<ControlPanel
							settings={settings}
							controlDropDown={controlDropDown}
							setControlDropDown={setControlDropDown}
							items={items}
						/>
						<Settings
							settings={settings}
							controlDropDown={controlDropDown}
						/>
						<ClearItems
							settings={settings}
							setToast={setToast}
							display={display}
							setDisplay={setDisplay}
							setItems={setItems}
							items={items}
						/>
						<Toast
							settings={settings}
							toast={toast}
						/>
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
