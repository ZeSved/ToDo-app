import { useState } from 'react'
import s from './tabs.module.scss'
import { FaPlus } from 'react-icons/fa6'
import { AppTabs } from '../../types/types'
import { targetCurrent, unselect } from '../../util/targets'

export default function Tabs({ tabArr }: TabsProps) {
	const [tabs, setTabs] = useState(tabArr)
	const [input, setInput] = useState('')

	return (
		<>
			<div className={s.inputContainer}>
				<input
					type='text'
					placeholder='New tab name...'
					onChange={(e) => setInput(e.currentTarget.value)}
				/>
				<button
					onClick={() => {
						setTabs(unselect(tabs))

						setTabs([
							{
								tabName: input,
								tabURL: '',
								isSelected: true,
							},
							...tabs,
						])

						setInput('')
					}}>
					<FaPlus />
					Create
				</button>
			</div>
			<nav className={s.nav}>
				{tabs.map((tab, i) => (
					<div
						onClick={() => setTabs(targetCurrent(tabs, i))}
						className={tab.isSelected ? s.selected : s.not_selected}
						key={i}>
						<p>{tab.tabName}</p>
					</div>
				))}
			</nav>
		</>
	)
}

interface TabsProps {
	tabArr: AppTabs[]
}
