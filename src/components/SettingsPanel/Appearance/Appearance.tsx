import { useEffect } from 'react'

import { Action, Custom, List, ToastMessage } from '../../../types/types'

import opened from '../../../images/svg/dropdown_open.svg'
import closed from '../../../images/svg/dropdown_closed.svg'

import styles from './Appearance.module.scss'
import storage from '../../../util/storage'

export default function Appearance({ list, dispatch, toastMessage }: SettingsProps) {
	useEffect(() => {
		if (!list.settingsDropdown) dispatch({ type: 'set-profile-dropdown', payload: false })
	}, [list.settingsDropdown])

	let labelName: string

	function nameSwitch(theme: Custom) {
		switch (theme.name) {
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

	function colorSwitch(save: boolean, e?: React.ChangeEvent<HTMLInputElement>, i?: number) {
		const newArr = [...list.currentTheme]

		if (e!.target.value === '') {
			switch (i) {
				case 0:
					newArr[i].color = list.currentTheme[i].color
					break
				case 1:
					newArr[i].color = list.currentTheme[i].color
					break
				case 2:
					newArr[i].color = list.currentTheme[i].color
					break
				case 3:
					newArr[i].color = list.currentTheme[i].color
					break
			}
		} else {
			newArr[i!].color = e!.target.value
			newArr[i!].content = newArr[i!].color
		}

		dispatch({ type: 'set-current-theme', payload: newArr })

		save && storage(list, dispatch, false, 'settings')
	}

	return (
		<div>
			<div
				className={list.settingsDropdown ? styles.appearance : styles.display}
				style={{ background: list.currentTheme[1].color }}>
				<div className={styles.colorContainer}>
					{list.currentTheme.map((theme, i) => (
						<div className={styles.inputContainer}>
							<label
								style={{ color: list.currentTheme[3].color }}
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
										colorSwitch(false, e, i)
									}}
									style={{ background: list.currentTheme[1].color }}
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
					style={{ background: list.currentTheme[0].color }}
					className={styles.mainDivider}
				/>
				<div
					style={{ background: list.currentTheme[2].color }}
					className={styles.buttonContainer}>
					<button
						style={{
							background: list.currentTheme[2].color,
							color: list.currentTheme[0].color,
						}}
						onClick={() => {
							colorSwitch(true)
							dispatch({ type: 'set-toast', payload: toastMessage.savedProfile })
							setTimeout(() => dispatch({ type: 'set-toast', payload: '' }), 2000)
						}}>
						Save Profile
					</button>
					<div
						className={styles.divider}
						style={{ background: list.currentTheme[0].color }}
					/>
					<button
						style={{
							background: list.currentTheme[2].color,
							color: list.currentTheme[0].color,
						}}
						onClick={() =>
							dispatch({ type: 'set-profile-dropdown', payload: !list.profileDropdown })
						}
						className={styles.loadDropdown}>
						Select profile
						<img
							src={list.profileDropdown ? opened : closed}
							alt=''
						/>
					</button>
				</div>
				<div
					style={{ background: list.currentTheme[0].color }}
					className={list.profileDropdown ? styles.dividerHorizontal : styles.display}
				/>
			</div>
		</div>
	)
}

type SettingsProps = {
	dispatch: React.Dispatch<Action>
	list: List
	toastMessage: ToastMessage
}
