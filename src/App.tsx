import { useEffect, useReducer } from 'react'

import './Main styles/App.scss'

import { List, ToastMessage } from './types/types'

import reducer from './util/reducer'
import { appearance } from './util/lists'

import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import TodoList from './components/TodoList/TodoList'
import Popups from './components/Popups/Popups'

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
		dispatch({ type: 'set-items', payload: JSON.parse(
			window.localStorage.getItem('itemDat') ?? JSON.stringify(list.items)
		)})

		dispatch({ type: 'set-current-theme', payload: JSON.parse(
			window.localStorage.getItem('settings') ?? JSON.stringify(list.currentTheme)
		)})

		dispatch({ type: 'set-custom-profile', payload: JSON.parse(
			window.localStorage.getItem('customOptions') ?? JSON.stringify(list.customProfile)
		) })
	}, [])

	useEffect(() => {
		if (list.items.length > 0 && window.localStorage.getItem('itemDat')!.length > 0) {
			window.localStorage.setItem('itemDat', JSON.stringify(list.items))
		} else return
	}, [list.items])

	const toastMessage: ToastMessage = {
		clearedChecked: 'All checked items have been cleared and the database updated.',
		clearedAll: 'All items have been cleared and the database reset.',
		appliedTheme: `Successfully applied theme.`,
		savedProfile: 'Profile saved to custom profiles'
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
							toastMessage={toastMessage}
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
