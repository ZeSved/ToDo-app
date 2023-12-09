// import { Tab } from '../../types/types'

import { useState } from 'react'
import s from './tabs.module.scss'

export default function Tabs() {
	const tabArr = [
		{
			name: 'Mathilda',
			isSelected: false,
		},
		{
			name: 'Warren',
			isSelected: false,
		},
		{
			name: 'Hilda',
			isSelected: false,
		},
		{
			name: 'Kyle',
			isSelected: true,
		},
		{
			name: 'Frederick',
			isSelected: false,
		},
		{
			name: 'Leo',
			isSelected: false,
		},
		{
			name: 'Terry',
			isSelected: false,
		},
	]

	const [tabs, setTabs] = useState(tabArr)

	return (
		<nav className={s.nav}>
			{/* {tabs.map((tab, i) => (
				<div
					className={tab.isSelected ? 'selected__tab' : 'tab'}
					key={i}>
					<p>{tab.name}</p>
				</div>
			))} */}
			{tabs.map((tab, i) => (
				<div
					onClick={() => {
						const newArr = [...tabs]

						newArr.forEach((tab) => {
							tab.isSelected = false
						})

						newArr[i].isSelected = true

						setTabs(newArr)
					}}
					className={tab.isSelected ? s.selected : s.not_selected}
					key={i}>
					<p>{tab.name}</p>
				</div>
			))}
		</nav>
	)
}

// interface TabsProps {
// 	tabs: Tab[]
// }
