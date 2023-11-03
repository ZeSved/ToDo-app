import { Custom } from '../../types'
import styles from './Toast.module.scss'

export default function Toast({ toast, currentTheme }: Toast) {
	return (
		<div
			className={toast ? styles.toast : styles.display}
			style={{ backgroundColor: currentTheme[1].color }}>
			<p style={{ backgroundColor: currentTheme[3].color }}>
				All items have been cleared and the database reset.
			</p>
		</div>
	)
}

type Toast = {
	toast: boolean
	currentTheme: Custom[]
}
