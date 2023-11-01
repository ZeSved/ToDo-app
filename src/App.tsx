import './App.css'

import { useEffect, useState } from 'react'

import ItemInput from './components/ItemInput/ItemInput'
import ClearItems from './components/ClearItems/ClearItems'
import ItemList from './components/ItemList/ItemList'
import Toast from './components/Toast/Toast'
import ControlPanel from './components/ControlPanel/ControlPanel'
import Settings from './components/Settings/Settings'

import { Item, Custom } from '../src/types'

import { manageStorage } from './util/manageStorage'

const DEFAULT_VALUE: Item[] = []

function App() {
	const [items, setItems] = useState<Item[] | undefined>(undefined)
	const [display, setDisplay] = useState<boolean>(false)
	const [favorite, setFavorite] = useState<boolean>(false)
	const [toast, setToast] = useState(false)
	const [controlDropDown, setControlDropDown] = useState(false)
	const [settings, setSettings] = useState<Custom[]>([
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
			color: '#00d1ff',
		},
		{
			name: 'textColor',
			color: '#ffffff',
		},
	])

	useEffect(() => {
		const itemDataLoad = JSON.parse(
			manageStorage('get', 'itemDat') ?? JSON.stringify(DEFAULT_VALUE)
		)

		setItems(itemDataLoad)

		const appearanceLoad = JSON.parse(manageStorage('get', 'settings') ?? JSON.stringify(settings))

		setSettings(appearanceLoad)
	}, [])

	useEffect(() => {
		if (items) {
			manageStorage('set', 'itemDat', JSON.stringify(items ?? DEFAULT_VALUE))
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
							style={{ background: settings[1].color }}
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
							style={{ background: settings[1].color }}
						/>
						<ControlPanel
							settings={settings}
							controlDropDown={controlDropDown}
							setControlDropDown={setControlDropDown}
							items={items}
						/>
						<Settings
							controlDropDown={controlDropDown}
							settings={settings}
							setSettings={setSettings}
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
			<div
				className='colorSheet'
				style={{
					background: `radial-gradient(16.87% 66.86% at 54.69% 85.38%,
						${settings[2].color} 0%,
						${settings[2].color} 43.96%,
						${settings[0].color + '00'} 100%),
					radial-gradient(102.37% 59.14% at 78.61% 108.2%,
						${settings[2].color} 0%,
						${settings[2].color + '96'} 29.69%,
						${settings[0].color + '00'} 100%),
					radial-gradient(54.02% 32.14% at 27.26% 56.83%,
						${settings[2].color} 0%,
						${settings[2].color + '95'} 87.19%,
						${settings[0].color + '00'} 100%)`,
				}}
			/>
		</div>
	)
}

export default App
