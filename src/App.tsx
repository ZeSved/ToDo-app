import { useEffect, useReducer } from 'react'

import './Main styles/App.scss'

import { List, ToastMessage } from './types/types'

import manageStorage from './util/manageStorage'
import reducer from './util/reducer'

import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import TodoList from './components/TodoList/TodoList'
import Popups from './components/Popups/Popups'
import { appearance } from './util/lists'

const DEFAULT_LIST: List = {
	items: [],
	input: '',
	warning: undefined,
	favorite: false,
	toast: '',
	settingsDropdown: false,
	mode: 'dark',
	currentTheme: appearance.darkModeTheme,
	profileDropdown: false,
	customProfile: [],
	onlyChecked: false,
	clearButtons: false,
}

function App() {
	const [list, dispatch] = useReducer(reducer, DEFAULT_LIST)

	useEffect(() => {
		const itemDataLoad = JSON.parse(manageStorage('get', 'itemDat') ?? JSON.stringify(list.items))

		const appearanceLoad = JSON.parse(
			manageStorage('get', 'settings') ?? JSON.stringify(list.currentTheme)
		)
		const customOptionsLoad = JSON.parse(
			manageStorage('get', 'customOptions') ?? JSON.stringify(list.customProfile)
		)

		dispatch({ type: 'set-items', payload: itemDataLoad })
		dispatch({ type: 'set-current-theme', payload: appearanceLoad })
		dispatch({ type: 'set-custom-profile', payload: customOptionsLoad })
	}, [])

	useEffect(() => {
		if (list.items) {
			manageStorage('set', 'itemDat', JSON.stringify(list.items))
		}
	}, [list.items])

	const toastMessage: ToastMessage = {
		clearedChecked: 'All checked items have been cleared and the database updated.',
		clearedAll: 'All items have been cleared and the database reset.',
		appliedTheme: `Successfully applied theme.`,
	}

	return (
		<div className='wrapper'>
			<main className='main'>
				{list.items ? (
					<>
						<TodoList
							dispatch={dispatch}
							list={list}
						/>
						<SettingsPanel
							dispatch={dispatch}
							list={list}
						/>
						<Popups
							dispatch={dispatch}
							list={list}
							toastMessage={toastMessage}
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
						${list.currentTheme[2].color} 0%,
						${list.currentTheme[2].color} 43.96%,
						${list.currentTheme[0].color + '00'} 100%),
					radial-gradient(102.37% 59.14% at 78.61% 108.2%,
						${list.currentTheme[2].color} 0%,
						${list.currentTheme[2].color + '96'} 29.69%,
						${list.currentTheme[0].color + '00'} 100%),
					radial-gradient(54.02% 32.14% at 27.26% 56.83%,
						${list.currentTheme[2].color} 0%,
						${list.currentTheme[2].color + '95'} 87.19%,
						${list.currentTheme[0].color + '00'} 100%)`,
				}}
			/>
		</div>
	)
}

export default App
