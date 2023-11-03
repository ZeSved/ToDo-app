import { Item, Custom, ProfileType } from '../../types'

import styles from './SettingsPanel.module.scss'

import opened from '../../images/svg/dropdown_open.svg'
import closed from '../../images/svg/dropdown_closed.svg'

import ClearItems from '../ClearItems/ClearItems'
import Profiles from './Profiles/Profiles'
import Appearance from './Appearance/Appearance'

export default function SettingsPanel({
	setCurrentTheme,
	setLoadDropdown,
	setItems,
	setDisplay,
	setToast,
	setControlDropDown,
	setCustomOptions,
	currentTheme,
	controlDropDown,
	loadDropdown,
	display,
	items,
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
				<ClearItems
					currentTheme={currentTheme}
					setToast={setToast}
					display={display}
					setDisplay={setDisplay}
					setItems={setItems}
					items={items}
				/>
				<Profiles
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
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>
	setToast: React.Dispatch<React.SetStateAction<boolean>>
	setCurrentTheme: React.Dispatch<React.SetStateAction<Custom[]>>
	setLoadDropdown: React.Dispatch<React.SetStateAction<boolean>>
	setControlDropDown: React.Dispatch<React.SetStateAction<boolean>>
	setCustomOptions: React.Dispatch<React.SetStateAction<ProfileType[]>>
	display: boolean
	items: Item[]
	currentTheme: Custom[]
	controlDropDown: boolean
	loadDropdown: boolean
}
