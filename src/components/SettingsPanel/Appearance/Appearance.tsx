import { useEffect, useState } from 'react'

import { Custom } from '../../../types'

import opened from '../../../images/svg/dropdown_open.svg'
import closed from '../../../images/svg/dropdown_closed.svg'

import { manageStorage } from '../../../util/manageStorage'

import styles from './Appearance.module.scss'

export default function Appearance({
	currentTheme,
	controlDropDown,
	setCurrentTheme,
	setLoadDropdown,
	loadDropdown,
}: SettingsProps) {
	useEffect(() => {
		if (!controlDropDown) setLoadDropdown(false)
	}, [controlDropDown])

	let labelName: string

	function nameSwitch(settings: Custom) {
		switch (settings.name) {
			case 'mainColor':
				labelName = 'Main color'
				break
			case 'secondaryColor':
				labelName = 'Secondary color'
				break
			case 'callToActionColor':
				labelName = 'Button color'
				break
			case 'textColor':
				labelName = 'Text color'
				break
		}

		return labelName
	}

	function colorSwitch(e: React.ChangeEvent<HTMLInputElement>, i: number) {
		const newArr = [...currentTheme]

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
			newArr[i].content = newArr[i].color
		}

		return newArr
	}

	return (
		<div
			className={controlDropDown ? styles.appearance : styles.display}
			style={{ background: currentTheme[1].color }}>
			<div className={styles.colorContainer}>
				{currentTheme.map((theme, i) => (
					<div className={styles.inputContainer}>
						<label
							style={{ color: currentTheme[3].color }}
							className={styles.inputLabel}
							htmlFor={theme.name}>
							{nameSwitch(theme)}
						</label>
						<div className={styles.inputColorContainer}>
							<input
								onChange={(e) => {
									if (!e.target.value.startsWith('#')) {
										e.target.value = '#' + e.target.value
									}

									if (e.target.value === '#') {
										e.target.value = ''
									}
									setCurrentTheme(colorSwitch(e, i))
								}}
								style={{ background: currentTheme[1].color }}
								className={styles.settingsInput}
								name={theme.name}
								type='text'
								placeholder={theme.color}
							/>
							<div
								className={styles.colorDisplay}
								style={{ backgroundColor: theme.color }}
							/>
						</div>
					</div>
				))}
			</div>
			<div
				style={{ background: currentTheme[0].color }}
				className={styles.mainDivider}
			/>
			<div
				style={{ background: currentTheme[2].color }}
				className={styles.buttonContainer}>
				<button
					style={{
						background: currentTheme[2].color,
						color: currentTheme[0].color,
					}}
					onClick={() => {
						manageStorage('set', 'settings', JSON.stringify(currentTheme))
					}}>
					Save Profile
				</button>
				<div
					className={styles.divider}
					style={{ background: currentTheme[0].color }}
				/>
				<button
					style={{
						background: currentTheme[2].color,
						color: currentTheme[0].color,
					}}
					onClick={() => setLoadDropdown(!loadDropdown)}
					className={styles.loadDropdown}>
					Select profile
					<img
						src={loadDropdown ? opened : closed}
						alt=''
					/>
				</button>
			</div>
			<div
				style={{ background: currentTheme[0].color }}
				className={loadDropdown ? styles.dividerHorizontal : styles.display}
			/>
		</div>
	)
}

type SettingsProps = {
	currentTheme: Custom[]
	controlDropDown: boolean
	setCurrentTheme: React.Dispatch<React.SetStateAction<Custom[]>>
	setLoadDropdown: React.Dispatch<React.SetStateAction<boolean>>
	loadDropdown: boolean
}
