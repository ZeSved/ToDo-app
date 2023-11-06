import { Action, List } from '../../../types/types'
import styles from './Toast.module.scss'

export default function Toast({ list, dispatch }: Toast) {
	setTimeout(() => dispatch({type: 'set-toast', payload: ''}), 9000)

	return (
		<div
			className={list.toast ? styles.toast : styles.display}
			style={{ backgroundColor: list.currentTheme[1].color }}>
			<p style={{ color: list.currentTheme[3].color }}>{list.toast}</p>
		</div>
	)
}

type Toast = {
	list: List
	dispatch: React.Dispatch<Action>
}
