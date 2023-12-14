import s from './tabs.module.scss'
import { Action, List } from '../../types/types'
import { targetCurrent } from '../../util/targets'
import { inputChecker } from '../../util/inputChecker'
import send from '../../images/send.svg'
import clear from '../../images/_clear_ symbol.svg'
import deleteImg from '../../images/_delete_ symbol.svg'
// import { removeItem } from '../../util/removeItem'

export default function Tabs({ list, dispatch }: TabsProps) {
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
								inputChecker(list.tabInput, dispatch, list)
							}
						}}
					/>
					<button
						onClick={() => {
							inputChecker(list.tabInput, dispatch, list)
						}}>
						<img
							src={send}
							alt=''
						/>
					</button>
					<div />
					<button
						disabled={list.tabs.length <= 1}
						onClick={() => {
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
											tabURL: 'https://todo.korell.dev/',
											isSelected: true,
										},
									],
								})
								dispatch({
									type: 'set-items',
									payload: [],
								})
								window.localStorage.setItem('itemDat', '[]')
							}
						}}>
						<img
							src={clear}
							alt=''
						/>
					</button>
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
						}}
						className={tab.isSelected ? s.selected : s.not_selected}
						key={i}>
						<p>{tab.tabName}</p>
						<div className={s.buttons}>
							<button
								disabled={list.tabs.length === 1}
								onClick={() => {
									const newArr = list.tabs
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
