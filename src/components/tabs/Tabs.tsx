import { useState } from 'react'
import s from './tabs.module.scss'
import { FaPlus } from 'react-icons/fa6'

export default function Tabs() {
	const tabArr = [
		{
			name: 'Untitled',
			isSelected: true,
		},
		{
			name: 'Untitled',
			isSelected: false,
		},
	]

	const [tabs, setTabs] = useState(tabArr)

	return (
		<>
			<div className={s.inputContainer}>
				<input
					type='text'
					placeholder='New tab name...'
				/>
				<button>
					<FaPlus />
					Create
				</button>
			</div>
			<nav className={s.nav}>
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
		</>
	)
}

// interface TabsProps {
// 	tabs: Tab[]
// }
