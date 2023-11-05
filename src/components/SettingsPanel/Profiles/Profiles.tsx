import styles from './Profiles.module.scss'

import opened from '../../../images/svg/dropdown_open.svg'
import closed from '../../../images/svg/dropdown_closed.svg'

import { customProfiles, defaultProfiles } from '../../../util/lists'
import { Action, List } from '../../../types/types'

import { useEffect, useState } from 'react'

export default function Profiles({ list, dispatch }: Profile) {
	const [showDefaults, setShowDefaults] = useState(false)
	const [showCustoms, setShowCustoms] = useState(false)

	useEffect(() => {
		if (!list.profileDropdown) {
			setShowCustoms(!showCustoms)
			setShowDefaults(!showDefaults)
		}
	}, [list.profileDropdown])

	return (
		<div
			style={{ background: list.currentTheme[1].color, color: list.currentTheme[3].color }}
			className={list.profileDropdown ? styles.profilesContainer : styles.display}>
			<div className={styles.defaultProfiles}>
				<button
					style={{ background: list.currentTheme[1].color, color: list.currentTheme[3].color }}
					onClick={() => setShowDefaults(!showDefaults)}>
					Default profiles
					<img
						src={showDefaults ? opened : closed}
						alt=''
					/>
				</button>
				<div
					style={{ background: list.currentTheme[0].color }}
					className={showDefaults ? styles.dividerHorizontal : styles.display}
				/>
				{showDefaults &&
					defaultProfiles.map((option, i) => (
						<>
							<div
								key={i}
								className={styles.profile}>
								<p>{option.name}</p>
								<button
									style={{
										background: list.currentTheme[2].color,
										color: list.currentTheme[0].color,
									}}
									className={styles.load}
									onClick={() => {
										dispatch({ type: 'set-current-theme', payload: option.value })
										dispatch({ type: 'set-mode', payload: option.name })
									}}>
									Load profile
								</button>
							</div>
						</>
					))}
				<div
					className={styles.dividerHorizontal}
					style={{ background: list.currentTheme[0].color, margin: '1rem 0' }}
				/>
				<div className={styles.customProfiles}>
					<button
						style={{ background: list.currentTheme[1].color, color: list.currentTheme[3].color }}
						onClick={() => setShowCustoms(!showCustoms)}>
						Custom profiles
						<img
							src={showCustoms ? opened : closed}
							alt=''
						/>
					</button>
					<div
						style={{ background: list.currentTheme[0].color }}
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
												background: list.currentTheme[2].color,
												color: list.currentTheme[0].color,
											}}
											className={styles.load}
											onClick={() =>
												dispatch({ type: 'set-current-theme', payload: option.value })
											}>
											Load profile
										</button>
										<button
											style={{
												background: list.currentTheme[2].color,
												color: list.currentTheme[0].color,
											}}
											className={styles.delete}
											onClick={() => {
												const newArr = [...list.customProfile]
												newArr.splice(i, 1)
												dispatch({ type: 'set-custom-profile', payload: newArr })
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
	dispatch: React.Dispatch<Action>
	list: List
}
