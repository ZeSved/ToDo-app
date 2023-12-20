export default function Buttons({ btn }: ButtonsProps) {
	return (
		<div style={{ display: 'flex' }}>
			{btn.map((but, i) => (
				<button
					disabled={but.disabled}
					key={i}
					className={but.style}
					onClick={but.func}>
					{
						<img
							src={but.img}
							alt=''
						/>
					}
				</button>
			))}
		</div>
	)
}

interface ButtonsProps {
	btn: Button[]
}

type Button = {
	func: () => void
	img: string
	style?: string
	disabled?: boolean
	i?: number
}
