import './Main styles/App.scss'

import { useEffect, useState } from 'react'

import Toast from './components/Toast/Toast'

import { Item, Custom, Mode, ProfileType } from '../src/types'

import { appearance, customProfiles } from './util/lists'
import { manageStorage } from './util/manageStorage'
import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import TodoList from './components/TodoList/TodoList'

const DEFAULT_VALUE: Item[] = []

function App() {
	const [items, setItems] = useState<Item[] | undefined>(undefined)
	const [warningDisplay, setWarningDisplay] = useState<string | undefined>(undefined)
	const [favorite, setFavorite] = useState<boolean>(false)
	const [toast, setToast] = useState<string | undefined>(undefined)
	const [controlDropDown, setControlDropDown] = useState(false)
	const [mode, setMode] = useState<Mode>(appearance.mode)
	const [currentTheme, setCurrentTheme] = useState<Custom[]>(appearance.darkModeTheme)
	const [loadDropdown, setLoadDropdown] = useState(false)
	const [customOptions, setCustomOptions] = useState<ProfileType[]>(customProfiles)

	useEffect(() => {
		const itemDataLoad = JSON.parse(
			manageStorage('get', 'itemDat') ?? JSON.stringify(DEFAULT_VALUE)
		)

		setItems(itemDataLoad)

		const appearanceLoad = JSON.parse(
			manageStorage('get', 'settings') ?? JSON.stringify(currentTheme)
		)

		setCurrentTheme(appearanceLoad)
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
						<TodoList
							setToast={setToast}
							currentTheme={currentTheme}
							warningDisplay={warningDisplay}
							items={items}
							favorite={favorite}
							setWarningDisplay={setWarningDisplay}
							setItems={setItems}
							setFavorite={setFavorite}
							mode={mode}
						/>
						<SettingsPanel
							setCustomOptions={setCustomOptions}
							loadDropdown={loadDropdown}
							setControlDropDown={setControlDropDown}
							setLoadDropdown={setLoadDropdown}
							controlDropDown={controlDropDown}
							currentTheme={currentTheme}
							setCurrentTheme={setCurrentTheme}
							setItems={setItems}
							items={items}
						/>
						<Toast
							currentTheme={currentTheme}
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
						${currentTheme[2].color} 0%,
						${currentTheme[2].color} 43.96%,
						${currentTheme[0].color + '00'} 100%),
					radial-gradient(102.37% 59.14% at 78.61% 108.2%,
						${currentTheme[2].color} 0%,
						${currentTheme[2].color + '96'} 29.69%,
						${currentTheme[0].color + '00'} 100%),
					radial-gradient(54.02% 32.14% at 27.26% 56.83%,
						${currentTheme[2].color} 0%,
						${currentTheme[2].color + '95'} 87.19%,
						${currentTheme[0].color + '00'} 100%)`,
				}}
			/>
		</div>
	)
}

export default App
