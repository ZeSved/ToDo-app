import { useEffect, useReducer, useState } from 'react'

import './Main styles/App.scss'

import { List } from './types/types'

import reducer from './util/reducer'

import ItemInput from './components/ItemInput/ItemInput'
import ItemList from './components/ItemList/ItemList'
import Stats from './components/Stats/Stats'

const DEFAULT_LIST: List = {
	items: [],
	input: '',
	favorite: false,
	onlyChecked: false,
	clearButtons: false,
}

const MOBILE_THRESHOLD = 420

function App() {
	const [onMobile, setOnMobile] = useState(false)
	const [list, dispatch] = useReducer(reducer, DEFAULT_LIST)

	useEffect(() => {
		dispatch({
			type: 'set-items',
			payload: JSON.parse(window.localStorage.getItem('itemDat') ?? JSON.stringify(list.items)),
		})

		function resize() {
			const root = getComputedStyle(document.querySelector(':root')!)

			setOnMobile(parseInt(root.width.slice(0, root.width.length - 2)) < MOBILE_THRESHOLD)
		}

		resize()
	}, [])

	useEffect(() => {
		if (list.items.length > 0 && (window.localStorage.getItem('itemDat') ?? list.items).length > 0) {
			window.localStorage.setItem('itemDat', JSON.stringify(list.items))
		}
	}, [list.items])

	return (
		<div className='wrapper'>
			<main className='main'>
				{list.items ? (
					<>
						<ItemInput
							dispatch={dispatch}
							list={list}
							onMobile={onMobile}
						/>
						<div className='dividerMain'/>
						<ItemList
							dispatch={dispatch}
							list={list}
							onMobile={onMobile}
						/>
						<div className='dividerMain' />
						<Stats list={list} />
					</>
				) : (
					<p>Loading...</p>
				)}
			</main>
			<div className='blurSheet' />
			<div
				className='colorSheet'
			/>
		</div>
	)
}

export default App
