export default function Buttons({ btn }: ButtonsProps) {
	return (
		<div>
			{btn.map((but) => (
				<button
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
	style: string
	func: () => void
	img: string
}
