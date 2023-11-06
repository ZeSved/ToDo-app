import { Action, List, ToastMessage } from '../../types/types'

import styles from './SettingsPanel.module.scss'

import opened from '../../images/svg/dropdown_open.svg'
import closed from '../../images/svg/dropdown_closed.svg'

import Profiles from './Profiles/Profiles'
import Appearance from './Appearance/Appearance'

export default function SettingsPanel({ list, dispatch, toastMessage }: SettingsPanelType) {
	return (
		<div
			style={{ background: list.currentTheme[1].color }}
			className={styles.settingsContainer}>
			<button
				style={{ backgroundColor: list.currentTheme[1].color }}
				onClick={() => dispatch({ type: 'set-settings-dropdown', payload: !list.settingsDropdown })}
				className={styles.settingsDropdown}>
				<p
					style={{
						color: list.currentTheme[3].color,
						fontSize: '1rem',
					}}>
					More
				</p>
				<img
					src={list.settingsDropdown ? opened : closed}
					alt=''
				/>
			</button>
			<div
				style={{ background: list.currentTheme[0].color, marginInline: 'auto' }}
				className={list.settingsDropdown ? styles.dividerHorizontal : styles.display}
			/>
			<div className={styles.appearance}>
				<Appearance
					dispatch={dispatch}
					list={list}
					toastMessage={toastMessage}
				/>
				<Profiles
					dispatch={dispatch}
					list={list}
				/>
			</div>
		</div>
	)
}

type SettingsPanelType = {
	dispatch: React.Dispatch<Action>
	list: List
	toastMessage: ToastMessage
}
