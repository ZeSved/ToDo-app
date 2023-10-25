import { Custom } from '../../types'

import styles from './Settings.module.css'

export default function Settings({ settings, controlDropDown }: SettingsProps) {
	let labelName: string

	function nameSwitch(settings: Custom) {
		switch (settings.name) {
			case 'mainColor':
				labelName = 'Main color: '
				break
			case 'secondaryColor':
				labelName = 'Secondary color: '
				break
			case 'callToActionColor':
				labelName = 'Button color: '
				break
			case 'textColor':
				labelName = 'Text color: '
				break
		}

		return labelName
	}

	return (
		<>
			<div
				style={{ background: settings[1].color }}
				className={controlDropDown ? styles.settingsContainer : styles.display}>
				{settings.map((setting) => (
					<div className={styles.inputContainer}>
						<label
							style={{ color: settings[3].color }}
							className={styles.inputLabel}
							htmlFor={setting.name}>
							{nameSwitch(setting)}
						</label>
						<input
							className={styles.settingsInput}
							name={setting.name}
							type='text'
							placeholder={setting.color}
						/>
						<div
							className={styles.colorDisplay}
							style={{ backgroundColor: setting.color }}
						/>
					</div>
				))}
				<button
					style={{ background: settings[2].color }}
					className={styles.saveBtn}>
					Save
				</button>
			</div>
		</>
	)
}

type SettingsProps = {
	settings: Custom[]
	controlDropDown: boolean
}
