import styles from './ItemButtons.module.scss'

import opened from '../../../images/svg/dropdown_open.svg'
import closed from '../../../images/svg/dropdown_closed.svg'

import { Action, Item, List } from '../../../types/types'
import { useEffect, useState } from 'react'
import { symbolChange } from '../../../util/symbolChange'
import storage from '../../../util/storage'

export default function ItemButtons({ item, i, list, dispatch, onMobile }: ItemButtonsProps) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const newArr = [...list.items]

		if (item.favorite === true) {
			newArr.splice(0, 0, newArr[i])
			newArr.splice(i + 1, 1)
		}

		if (item.favorite === false) {
			newArr.splice(newArr.length, 0, newArr[i])
			newArr.splice(i, 1)
		}

		dispatch({ type: 'set-items', payload: newArr })
	}, [item.favorite])

	return (
		<>
			<button
				style={{ background: list.currentTheme[1].color }}
				className={onMobile ? styles.isOpen : styles.display}
				onClick={() => setIsOpen(!isOpen)}>
				<img
					className={styles.isOpenImg}
					style={{ rotate: '90deg', background: list.currentTheme[2].color }}
					src={isOpen ? opened : closed}
					alt=''
				/>
			</button>
			<div className={onMobile ? (isOpen ? styles.mobileFrag : styles.display) : styles.pcFrag}>
				<button
					className={styles.deleteBtn}
					onClick={() => {
						const newArr = [...list.items]
						newArr.splice(i, 1)
						if (newArr.length === 0) {
							dispatch({ type: 'set-items', payload: [] })
							storage(list, dispatch, true, 'force')
						} else {
							dispatch({ type: 'set-items', payload: newArr })
						}
						setIsOpen(false)
					}}>
					{
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='31'
							viewBox='0 0 30 31'
							fill='none'>
							<path
								d='M10.125 24.2852L15 19.3386L19.875 24.2852L22.5 21.6217L17.625 16.6751L22.5 11.7285L19.875 9.06498L15 14.0116L10.125 9.06498L7.5 11.7285L12.375 16.6751L7.5 21.6217L10.125 24.2852ZM5.625 31C4.59375 31 3.71094 30.6274 2.97656 29.8823C2.24219 29.1371 1.875 28.2413 1.875 27.1949V5.70758H0V1.90253H9.375V0H20.625V1.90253H30V5.70758H28.125V27.1949C28.125 28.2413 27.7578 29.1371 27.0234 29.8823C26.2891 30.6274 25.4062 31 24.375 31H5.625ZM24.375 5.70758H5.625V27.1949H24.375V5.70758Z'
								fill={list.currentTheme[2].color}
							/>
						</svg>
					}
				</button>
				<div
					style={{ background: list.currentTheme[0].color }}
					className={styles.dividerVertical}
				/>
				<button
					className={styles.favoriteBtn}
					onClick={() => {
						symbolChange(item, 'favorite', i, dispatch, list)
						setIsOpen(false)
					}}>
					{item.favorite ? (
						<svg
							width='32'
							height='31'
							viewBox='0 0 326 311'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M153.489 7.27051C156.483 -1.9426 169.517 -1.94261 172.511 7.2705L204.086 104.45C205.425 108.57 209.264 111.36 213.597 111.36H315.777C325.464 111.36 329.492 123.756 321.655 129.45L238.989 189.51C235.484 192.056 234.018 196.57 235.357 200.69L266.932 297.87C269.926 307.083 259.381 314.744 251.544 309.05L168.878 248.99C165.373 246.444 160.627 246.444 157.122 248.99L74.4564 309.05C66.6193 314.744 56.0745 307.083 59.068 297.87L90.6435 200.69C91.9822 196.57 90.5157 192.056 87.0108 189.51L4.34507 129.45C-3.49206 123.756 0.535685 111.36 10.2229 111.36H112.403C116.736 111.36 120.575 108.57 121.914 104.45L153.489 7.27051Z'
								fill={list.currentTheme[2].color}
							/>
						</svg>
					) : (
						<svg
							width='32'
							height='31'
							viewBox='0 0 380 340'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M183.489 29.2705C186.483 20.0574 199.517 20.0574 202.511 29.2705L234.086 126.45C235.425 130.57 239.264 133.36 243.597 133.36H345.777C355.464 133.36 359.492 145.756 351.655 151.45L268.989 211.51C265.484 214.056 264.018 218.57 265.357 222.69L296.932 319.87C299.926 329.083 289.381 336.744 281.544 331.05L198.878 270.99C195.373 268.444 190.627 268.444 187.122 270.99L104.456 331.05C96.6193 336.744 86.0745 329.083 89.068 319.87L120.644 222.69C121.982 218.57 120.516 214.056 117.011 211.51L34.3451 151.45C26.5079 145.756 30.5357 133.36 40.2229 133.36H142.403C146.736 133.36 150.575 130.57 151.914 126.45L183.489 29.2705Z'
								fill={list.currentTheme[2].color}
							/>
							<path
								d='M189.196 79.7082C190.393 76.023 195.607 76.023 196.804 79.7082L220.166 151.609C220.702 153.257 222.238 154.373 223.97 154.373H299.571C303.446 154.373 305.057 159.331 301.922 161.609L240.76 206.046C239.358 207.065 238.771 208.87 239.307 210.518L262.669 282.419C263.866 286.104 259.648 289.169 256.514 286.891L195.351 242.454C193.949 241.435 192.051 241.435 190.649 242.454L129.486 286.891C126.352 289.169 122.134 286.104 123.331 282.419L146.693 210.518C147.229 208.87 146.642 207.065 145.24 206.046L84.0775 161.609C80.9427 159.331 82.5538 154.373 86.4287 154.373H162.03C163.762 154.373 165.298 153.257 165.834 151.609L189.196 79.7082Z'
								fill={list.currentTheme[1].color}
							/>
						</svg>
					)}
				</button>
			</div>
			<div
				style={{ background: list.currentTheme[0].color }}
				className={styles.dividerVertical}
			/>
			<button
				onClick={() => {
					symbolChange(item, 'checked', i, dispatch, list)
				}}
				className={styles.checkBtn}>
				{item.checked ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'>
						<path
							d='M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58333 14.9167L12.6667 22ZM3.33333 30C2.41667 30 1.63194 29.6736 0.979167 29.0208C0.326389 28.3681 0 27.5833 0 26.6667V3.33333C0 2.41667 0.326389 1.63194 0.979167 0.979167C1.63194 0.326389 2.41667 0 3.33333 0H26.6667C27.5833 0 28.3681 0.326389 29.0208 0.979167C29.6736 1.63194 30 2.41667 30 3.33333V26.6667C30 27.5833 29.6736 28.3681 29.0208 29.0208C28.3681 29.6736 27.5833 30 26.6667 30H3.33333ZM3.33333 26.6667H26.6667V3.33333H3.33333V26.6667Z'
							fill={list.currentTheme[2].color}
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'>
						<path
							d='M3.33333 30C2.41667 30 1.63194 29.6736 0.979167 29.0208C0.326389 28.3681 0 27.5833 0 26.6667V3.33333C0 2.41667 0.326389 1.63194 0.979167 0.979167C1.63194 0.326389 2.41667 0 3.33333 0H26.6667C27.5833 0 28.3681 0.326389 29.0208 0.979167C29.6736 1.63194 30 2.41667 30 3.33333V26.6667C30 27.5833 29.6736 28.3681 29.0208 29.0208C28.3681 29.6736 27.5833 30 26.6667 30H3.33333ZM3.33333 26.6667H26.6667V3.33333H3.33333V26.6667Z'
							fill={list.currentTheme[2].color}
						/>
					</svg>
				)}
			</button>
		</>
	)
}

interface ItemButtonsProps {
	item: Item
	i: number
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
