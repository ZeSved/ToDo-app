import { List, Action, ToastMessage } from '../../../types/types'
import { notChecked } from '../../../util/sort'
import styles from './Warning.module.scss'

export default function Warning({ list, dispatch, toastMessage }: WarningProps) {
	return (
		<div className={list.warning ? styles.blur : styles.display}>
			<div
				style={{
					border: `2px solid ${list.currentTheme[1].color}`,
					background: list.currentTheme[0].color,
				}}
				className={styles.clear_popup}>
				<h2 style={{ color: list.currentTheme[3].color }}>{list.warning && list.warning[0]}</h2>
				<h2 style={{ color: list.currentTheme[3].color }}>{list.warning && list.warning[1]}</h2>
				<div
					style={{
						backgroundColor: list.currentTheme[2].color,
						color: list.currentTheme[3].color,
					}}
					className={list.warning ? styles.warning : styles.display}>
					<p>{list.warning && list.warning[2]}</p>
				</div>
				<div className={styles.btnContainer}>
					<button
						style={{
							backgroundColor: list.currentTheme[2].color,
							color: list.currentTheme[3].color,
						}}
						onClick={() => dispatch({ type: 'set-warning', payload: undefined })}
						className={styles.cancelBtn}>
						No
					</button>
					<button
						onClick={
							list.onlyChecked
								? () => {
										dispatch({ type: 'set-warning', payload: undefined })
										dispatch({ type: 'set-items', payload: notChecked(list)! })
										setTimeout(
											() => dispatch({ type: 'set-toast', payload: toastMessage.clearedChecked }),
											50
										)
										dispatch({ type: 'set-only-checked', payload: false })
										setTimeout(() => dispatch({ type: 'set-toast', payload: '' }), 2000)
								  }
								: () => {
										dispatch({ type: 'set-warning', payload: undefined })
										dispatch({ type: 'set-items', payload: [] })
										window.localStorage.setItem('itemDat', '[]')
										setTimeout(
											() => dispatch({ type: 'set-toast', payload: toastMessage.clearedAll }),
											50
										)
										dispatch({ type: 'set-only-checked', payload: false })
										setTimeout(() => dispatch({ type: 'set-toast', payload: '' }), 2000)
								  }
						}
						style={{
							border: `2px solid ${list.currentTheme[2].color}`,
							background: list.currentTheme[0].color,
							color: list.currentTheme[3].color,
						}}
						className={styles.clearBtn}>
						Yes, delete all
					</button>
				</div>
			</div>
		</div>
	)
}

type WarningProps = {
	dispatch: React.Dispatch<Action>
	list: List
	toastMessage: ToastMessage
}
