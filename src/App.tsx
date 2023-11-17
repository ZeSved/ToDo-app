import { useEffect, useReducer, useState } from 'react'

import './Main styles/App.scss'

import { List, ToastMessage } from './types/types'

import reducer from './util/reducers/reducer'
import { appearance } from './util/lists'
import storage from './util/storage'

import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import TodoList from './components/TodoList/TodoList'
import Popups from './components/Popups/Popups'
// import { convert } from './util/ManageColors'

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

const MOBILE_THRESHOLD = 420

function App() {
	const [onMobile, setOnMobile] = useState(false)
	const [list, dispatch] = useReducer(reducer, DEFAULT_LIST)

	useEffect(() => {
		storage(list, dispatch, false)

		function resize() {
			const root = getComputedStyle(document.querySelector(':root')!)

			setOnMobile(parseInt(root.width.slice(0, root.width.length - 2)) < MOBILE_THRESHOLD)
		}

		resize()
	}, [])

	useEffect(() => storage(list, dispatch, true, 'items'), [list.items])

	const toastMessage: ToastMessage = {
		clearedChecked: 'All checked items have been cleared and the database updated.',
		clearedAll: 'All items have been cleared and the database reset.',
		appliedTheme: `Successfully applied theme.`,
		savedProfile: 'Profile saved to custom profiles',
	}

	// console.log(convert('#32cd32'))

	return (
		<div className='wrapper'>
			<main className='main'>
				{list.items ? (
					<>
						<TodoList
							dispatch={dispatch}
							list={list}
							onMobile={onMobile}
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
