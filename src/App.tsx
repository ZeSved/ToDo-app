import { useEffect, useReducer, useState } from 'react'

import './Main styles/App.scss'

import { List } from './types/types'

import reducer from './util/reducer'
import { storageKeys } from './constants/storageKeys'

import ItemInput from './components/ItemInput/ItemInput'
import ItemList from './components/ItemList/ItemList'
import Stats from './components/Stats/Stats'
import Tabs from './components/tabs/Tabs'
import { getTargetTab } from './util/getTargetTab'

const DEFAULT_LIST: List = {
	favorite: false,
	input: '',
	items: [],
	tabInput: '',
	tabs: [],
}

const MOBILE_THRESHOLD = 420
const backgroundSVGLocation = 500

function App() {
	const [onMobile, setOnMobile] = useState(false)
	const [list, dispatch] = useReducer(reducer, DEFAULT_LIST)

	useEffect(() => {
		dispatch({
			type: 'set-tabs',
			payload: JSON.parse(
				window.localStorage.getItem(storageKeys.tabs) ?? JSON.stringify(list.tabs)
			),
		})

		window.localStorage.getItem('lastOpened') ??
			window.localStorage.setItem('lastOpened', list.tabs[0].tabName)

		dispatch({
			type: 'set-items',
			payload: JSON.parse(
				window.localStorage.getItem(`Tab ${window.localStorage.getItem('lastOpened')}`) ??
					JSON.stringify(list.items)
			),
		})

		function resize() {
			const root = getComputedStyle(document.querySelector(':root')!)

			setOnMobile(parseInt(root.width.slice(0, root.width.length - 2)) < MOBILE_THRESHOLD)
		}

		resize()
	}, [])

	useEffect(() => {
		if (
			list.items.length > 0 &&
			(window.localStorage.getItem(getTargetTab(list.tabs)) ?? list.items).length > 0
		) {
			window.localStorage.setItem(getTargetTab(list.tabs), JSON.stringify(list.items))
		}

		if (
			list.tabs.length >= 1 &&
			(window.localStorage.getItem(storageKeys.tabs) ?? list.tabs).length >= 1
		) {
			window.localStorage.setItem(storageKeys.tabs, JSON.stringify(list.tabs))
		}
	}, [list.items, list.tabs])

	return (
		<div className='wrapper'>
			<main className='main'>
				<section className='tabs'>
					<Tabs
						dispatch={dispatch}
						list={list}
					/>
				</section>
				<section className='main_app'>
					<ItemInput
						dispatch={dispatch}
						list={list}
						onMobile={onMobile}
					/>
					<ItemList
						dispatch={dispatch}
						list={list}
						onMobile={onMobile}
					/>
					<Stats list={list} />
				</section>
			</main>
			<div className='blurSheet' />
			<div className='colorSheet'>
				<svg
					id='visual'
					viewBox={`0 0 ${backgroundSVGLocation * 3.6} ${backgroundSVGLocation * 2}`}
					width={backgroundSVGLocation * 3.84 * 2}
					height={backgroundSVGLocation * 2.14 * 2}
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'>
					<path
						d='M0 400L18.8 392.2C37.7 384.3 75.3 368.7 112.8 369.5C150.3 370.3 187.7 387.7 225.2 398.3C262.7 409 300.3 413 337.8 413.5C375.3 414 412.7 411 450.2 397.7C487.7 384.3 525.3 360.7 562.8 364.2C600.3 367.7 637.7 398.3 675.2 408.3C712.7 418.3 750.3 407.7 787.8 394C825.3 380.3 862.7 363.7 881.3 355.3L900 347L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z'
						fill='#002a4d'></path>
					<path
						d='M0 382L18.8 391.3C37.7 400.7 75.3 419.3 112.8 422.7C150.3 426 187.7 414 225.2 416C262.7 418 300.3 434 337.8 432.5C375.3 431 412.7 412 450.2 411C487.7 410 525.3 427 562.8 436.3C600.3 445.7 637.7 447.3 675.2 446.7C712.7 446 750.3 443 787.8 445.2C825.3 447.3 862.7 454.7 881.3 458.3L900 462L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z'
						fill='#00496f'></path>
					<path
						d='M0 431L18.8 429.7C37.7 428.3 75.3 425.7 112.8 425.7C150.3 425.7 187.7 428.3 225.2 439.3C262.7 450.3 300.3 469.7 337.8 477.7C375.3 485.7 412.7 482.3 450.2 477C487.7 471.7 525.3 464.3 562.8 463.8C600.3 463.3 637.7 469.7 675.2 465.3C712.7 461 750.3 446 787.8 444.3C825.3 442.7 862.7 454.3 881.3 460.2L900 466L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z'
						fill='#006a93'></path>
					<path
						d='M0 495L18.8 490.8C37.7 486.7 75.3 478.3 112.8 474.3C150.3 470.3 187.7 470.7 225.2 478.2C262.7 485.7 300.3 500.3 337.8 499.2C375.3 498 412.7 481 450.2 481.7C487.7 482.3 525.3 500.7 562.8 500.8C600.3 501 637.7 483 675.2 481.5C712.7 480 750.3 495 787.8 497.2C825.3 499.3 862.7 488.7 881.3 483.3L900 478L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z'
						fill='#018bb7'></path>
				</svg>
			</div>
		</div>
	)
}

export default App
