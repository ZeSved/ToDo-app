import s from './tabs.module.scss'
import { Action, List } from '../../types/types'
import { targetCurrent } from '../../util/targets'
import { inputChecker } from '../../util/inputChecker'
import send from '../../images/send.svg'
import clear from '../../images/_clear_ symbol.svg'
import deleteImg from '../../images/_delete_ symbol.svg'
import { getTargetTab } from '../../util/getTargetTab'
import Buttons from '../../fragments/Buttons'

export default function Tabs({ list, dispatch }: TabsProps) {
	const buttons = [
		{
			func: () => {
				if (list.tabs.filter((o) => o.tabName === list.tabInput).length > 0) {
					alert(
						`There already exists a tab named "${list.tabInput}", please choose a different name or delete the tab.`
					)
					return
				}
				inputChecker(list.tabInput, dispatch, list)

				dispatch({
					type: 'set-items',
					payload: JSON.parse(window.localStorage.getItem(getTargetTab(list.tabs)) ?? '[]'),
				})
			},
			img: send,
			style: s.send,
		},
		{
			func: () => {
				if (
					confirm(
						'Are you sure you want to permanently delete all tabs? NOTE: This will also wipe all data from all tabs.'
					)
				) {
					dispatch({
						type: 'set-tabs',
						payload: [
							{
								tabName: 'Untitled',
								allChecked: false,
								isSelected: true,
							},
						],
					})
					dispatch({
						type: 'set-items',
						payload: [],
					})
					window.localStorage.setItem(getTargetTab(list.tabs), '[]')
					window.localStorage.clear()
				}
			},
			img: clear,
			disabled: list.tabs.length <= 1,
			style: s.clear,
		},
	]

	return (
		<>
			<div className={s.inputContainer}>
				<div className={s.tabInput}>
					<input
						type='text'
						placeholder='New tab name...'
						onChange={(e) =>
							dispatch({
								type: 'set-tab-input',
								payload: e.currentTarget.value,
							})
						}
						value={list.tabInput}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								e.preventDefault()
								if (list.tabs.filter((o) => o.tabName === list.tabInput).length > 0) {
									alert(
										`There already exists a tab named "${list.tabInput}", please choose a different name or delete the tab.`
									)
									return
								}

								inputChecker(list.tabInput, dispatch, list)

								dispatch({
									type: 'set-items',
									payload: JSON.parse(window.localStorage.getItem(getTargetTab(list.tabs)) ?? '[]'),
								})
							}
						}}
					/>
					<Buttons btn={buttons} />
				</div>
			</div>
			<div className={s.nav}>
				{list.tabs.map((tab, i) => (
					<div
						onClick={() => {
							dispatch({
								type: 'set-tabs',
								payload: targetCurrent(list.tabs, i),
							})

							dispatch({
								type: 'set-items',
								payload: JSON.parse(window.localStorage.getItem(getTargetTab(list.tabs)) ?? '[]'),
							})
						}}
						className={`${tab.isSelected ? s.selected : s.not_selected} ${
							tab.allChecked ? s.checked : s.unchecked
						}`}
						key={i}>
						<p>{tab.tabName}</p>
						<div className={s.buttons}>
							<button
								disabled={list.tabs.length === 1}
								onClick={() => {
									const newArr = list.tabs
									window.localStorage.removeItem(`Tab ${list.tabs[i].tabName}`)
									newArr.splice(i, 1)
									dispatch({
										type: 'set-tabs',
										payload: newArr,
									})
								}}>
								<img
									src={deleteImg}
									alt=''
								/>
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

interface TabsProps {
	dispatch: React.Dispatch<Action>
	list: List
}
