import styles from './Profiles.module.scss'

import opened from '../../../images/svg/dropdown_open.svg'
import closed from '../../../images/svg/dropdown_closed.svg'

import { customProfiles, defaultProfiles } from '../../../util/lists'
import { Custom, Mode, ProfileType } from '../../../types'

import { useEffect, useState } from 'react'

export default function Profiles({
	setCurrentTheme,
	loadDropdown,
	currentTheme,
	setCustomOptions,
	setMode,
}: Profile) {
	const [showDefaults, setShowDefaults] = useState(false)
	const [showCustoms, setShowCustoms] = useState(false)

	useEffect(() => {
		if (!loadDropdown) {
			setShowCustoms(!showCustoms)
			setShowDefaults(!showDefaults)
		}
	}, [loadDropdown])

	return (
		<div
			style={{ background: currentTheme[1].color, color: currentTheme[3].color }}
			className={loadDropdown ? styles.profilesContainer : styles.display}>
			<div className={styles.defaultProfiles}>
				<button
					style={{ background: currentTheme[1].color, color: currentTheme[3].color }}
					onClick={() => setShowDefaults(!showDefaults)}>
					Default profiles
					<img
						src={showDefaults ? opened : closed}
						alt=''
					/>
				</button>
				<div
					style={{ background: currentTheme[0].color }}
					className={showDefaults ? styles.dividerHorizontal : styles.display}
				/>
				{showDefaults &&
					defaultProfiles.map((option) => (
						<>
							<div className={styles.profile}>
								<p>{option.name}</p>
								<button
									style={{
										background: currentTheme[2].color,
										color: currentTheme[0].color,
									}}
									className={styles.load}
									onClick={() => {
										setCurrentTheme(option.value)
										setMode
									}}>
									Load profile
								</button>
							</div>
						</>
					))}
				<div
					className={styles.dividerHorizontal}
					style={{ background: currentTheme[0].color, margin: '1rem 0' }}
				/>
				<div className={styles.customProfiles}>
					<button
						style={{ background: currentTheme[1].color, color: currentTheme[3].color }}
						onClick={() => setShowCustoms(!showCustoms)}>
						Custom profiles
						<img
							src={showCustoms ? opened : closed}
							alt=''
						/>
					</button>
					<div
						style={{ background: currentTheme[0].color }}
						className={showCustoms ? styles.dividerHorizontal : styles.display}
					/>
					{showCustoms &&
						customProfiles.map((option, i) => (
							<>
								<div
									key={i}
									className={styles.profile}>
									<p>{option.name}</p>
									<div className={styles.buttonContainer}>
										<button
											style={{
												background: currentTheme[2].color,
												color: currentTheme[0].color,
											}}
											className={styles.load}
											onClick={() => setCurrentTheme(option.value)}>
											Load profile
										</button>
										<button
											style={{
												background: currentTheme[2].color,
												color: currentTheme[0].color,
											}}
											className={styles.delete}
											onClick={() => {
												const newArr = [...customProfiles]
												newArr.splice(i, 1)
												setCustomOptions(newArr)
											}}>
											Delete profile
										</button>
									</div>
								</div>
							</>
						))}
				</div>
			</div>
		</div>
	)
}

type Profile = {
	setCurrentTheme: React.Dispatch<React.SetStateAction<Custom[]>>
	setCustomOptions: React.Dispatch<React.SetStateAction<ProfileType[]>>
	loadDropdown: boolean
	currentTheme: Custom[]
	setMode: React.Dispatch<React.SetStateAction<Mode>>
}
