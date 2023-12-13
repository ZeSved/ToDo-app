export default function Button({ btn }: any) {
	return (
		<button
			className={btn.class}
			onClick={btn.func}>
			{
				<img
					src={btn.img}
					alt=''
				/>
			}
		</button>
	)
}

// interface ButtonPropsIn {
// 	btn: ButtonProps
// }

// type ButtonProps = {
// 	class: string
// 	func: () => {}
// 	img: string
// }
