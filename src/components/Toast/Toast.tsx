import { Custom } from '../../types'
import styles from './Toast.module.scss'

export default function Toast({ toast, currentTheme }: Toast) {
	return (
		<div
			className={toast ? styles.toast : styles.display}
			style={{ backgroundColor: currentTheme[1].color }}>
			<p style={{ backgroundColor: currentTheme[3].color }}>{toast}</p>
		</div>
	)
}

type Toast = {
	toast: string | undefined
	currentTheme: Custom[]
}
