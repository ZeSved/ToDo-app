import { Custom } from '../../types'

import { manageStorage } from '../../util/manageStorage'

import styles from './Settings.module.css'

export default function Settings({ settings, controlDropDown, setSettings }: SettingsProps) {
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

	function colorSwitch(e: React.ChangeEvent<HTMLInputElement>, i: number) {
		const newArr = [...settings]

		if (e.target.value === '') {
			switch (i) {
				case 0:
					newArr[i].color = '#000000'
					break
				case 1:
					newArr[i].color = '#3f3f3f'
					break
				case 2:
					newArr[i].color = '#00d1ff'
					break
				case 3:
					newArr[i].color = '#ffffff'
					break
			}
		} else {
			newArr[i].color = e.target.value
		}

		return newArr
	}

	return (
		<>
			<div
				style={{ background: settings[1].color }}
				className={controlDropDown ? styles.settingsContainer : styles.display}>
				<div className={styles.colorContainer}>
					{settings.map((setting, i) => (
						<div className={styles.inputContainer}>
							<label
								style={{ color: settings[3].color }}
								className={styles.inputLabel}
								htmlFor={setting.name}>
								{nameSwitch(setting)}
							</label>
							<input
								onChange={(e) => {
									if (!e.target.value.startsWith('#')) {
										e.target.value = '#' + e.target.value
									}
									setSettings(colorSwitch(e, i))
								}}
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
				</div>
				<div
					style={{ background: settings[2].color }}
					className={styles.buttonContainer}>
					<button
						onClick={() => {
							manageStorage('set', 'settings', JSON.stringify(settings))
						}}
						style={{ background: settings[2].color }}
						className={styles.saveBtn}>
						Save
					</button>
					<div
						className={styles.divider}
						style={{ background: settings[1].color }}
					/>
					<button
						onClick={() => {
							setSettings([
								{
									name: 'mainColor',
									color: '#000000',
								},
								{
									name: 'secondaryColor',
									color: '#3f3f3f',
								},
								{
									name: 'callToActionColor',
									color: '#00d1ff',
								},
								{
									name: 'textColor',
									color: '#ffffff',
								},
							])

							manageStorage('set', 'settings', JSON.stringify(settings))
						}}
						className={styles.resetBtn}
						style={{ background: settings[2].color }}>
						Reset
					</button>
				</div>
			</div>
		</>
	)
}

type SettingsProps = {
	settings: Custom[]
	controlDropDown: boolean
	setSettings: React.Dispatch<React.SetStateAction<Custom[]>>
}
