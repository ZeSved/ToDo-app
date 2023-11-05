import styles from './ItemInput.module.scss'

import { Action, List } from '../../../types/types'
import { addItem } from '../../../util/addItem'

import ClearButtons from './fragment/ClearButtons'

export default function ItemInput({ list, dispatch }: ItemInputProps) {
	function checker() {
		if (list.input.trim().length === 0) return
		addItem(dispatch, list)
		dispatch({ type: 'set-input', payload: '' })
		list.favorite && dispatch({ type: 'set-favorite', payload: false })
	}

	return (
		<>
			<div
				style={{ border: `2px solid ${list.currentTheme[1].color}` }}
				className={styles.itemInputWrapper}>
				<input
					type='text'
					placeholder='Type here to begin...'
					value={list.input}
					onChange={(e) => dispatch({ type: 'set-input', payload: e.target.value })}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault()

							checker()
						}
					}}
				/>
				<button
					style={{ backgroundColor: list.currentTheme[1].color }}
					onClick={() => checker()}
					className={styles.send}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='27'
						viewBox='0 0 32 27'
						fill='none'>
						<path
							d='M0 26.6667V0L31.6667 13.3333L0 26.6667ZM3.33333 21.6667L23.0833 13.3333L3.33333 5V10.8333L13.3333 13.3333L3.33333 15.8333V21.6667Z'
							fill={list.currentTheme[2].color}
						/>
					</svg>
				</button>
				<div className={styles.divider} />
				<button
					style={{ backgroundColor: list.currentTheme[1].color }}
					className={styles.set_favorite}
					onClick={() => dispatch({ type: 'set-favorite', payload: !list.favorite })}>
					{list.favorite ? (
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
				<div className={styles.divider} />
				<button
					style={{ backgroundColor: list.currentTheme[1].color }}
					onClick={() => dispatch({ type: 'set-clear-buttons', payload: !list.clearButtons })}
					className={styles.clear}>
					{
						<svg
							width='32'
							height='32'
							viewBox='0 0 49 49'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								y='5.65686'
								width='8'
								height='60'
								rx='4'
								transform='rotate(-45 0 5.65686)'
								fill={list.currentTheme[2].color}
							/>
							<rect
								x='5.65686'
								y='48.0833'
								width='8'
								height='60'
								rx='4'
								transform='rotate(-135 5.65686 48.0833)'
								fill={list.currentTheme[2].color}
							/>
						</svg>
					}
				</button>
				<ClearButtons
					dispatch={dispatch}
					list={list}
				/>
			</div>
		</>
	)
}

interface ItemInputProps {
	dispatch: React.Dispatch<Action>
	list: List
}
