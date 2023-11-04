import { Custom, Mode, ProfileType } from '../../types'

import styles from './SettingsPanel.module.scss'

import opened from '../../images/svg/dropdown_open.svg'
import closed from '../../images/svg/dropdown_closed.svg'

import Profiles from './Profiles/Profiles'
import Appearance from './Appearance/Appearance'

export default function SettingsPanel({
	setCurrentTheme,
	setLoadDropdown,
	setControlDropDown,
	setCustomOptions,
	currentTheme,
	controlDropDown,
	loadDropdown,
	setMode,
}: SettingsPanelType) {
	return (
		<div
			style={{ background: currentTheme[1].color }}
			className={styles.settingsContainer}>
			<button
				style={{ backgroundColor: currentTheme[1].color }}
				onClick={() => setControlDropDown(!controlDropDown)}
				className={styles.settingsDropdown}>
				<p
					style={{
						color: currentTheme[3].color,
						fontSize: '1rem',
					}}>
					More
				</p>
				<img
					src={controlDropDown ? opened : closed}
					alt=''
				/>
			</button>
			<div
				style={{ background: currentTheme[0].color, marginInline: 'auto' }}
				className={controlDropDown ? styles.dividerHorizontal : styles.display}
			/>
			<div className={styles.appearance}>
				<Appearance
					loadDropdown={loadDropdown}
					setLoadDropdown={setLoadDropdown}
					controlDropDown={controlDropDown}
					currentTheme={currentTheme}
					setCurrentTheme={setCurrentTheme}
				/>
				<Profiles
					setMode={setMode}
					setCustomOptions={setCustomOptions}
					currentTheme={currentTheme}
					loadDropdown={loadDropdown}
					setCurrentTheme={setCurrentTheme}
				/>
			</div>
		</div>
	)
}

type SettingsPanelType = {
	setMode: React.Dispatch<React.SetStateAction<Mode>>
	setCurrentTheme: React.Dispatch<React.SetStateAction<Custom[]>>
	setLoadDropdown: React.Dispatch<React.SetStateAction<boolean>>
	setControlDropDown: React.Dispatch<React.SetStateAction<boolean>>
	setCustomOptions: React.Dispatch<React.SetStateAction<ProfileType[]>>
	currentTheme: Custom[]
	controlDropDown: boolean
	loadDropdown: boolean
}
