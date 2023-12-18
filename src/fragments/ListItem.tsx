import Button from './Buttons'

export default function ListItem({ item }: any) {
	return (
		<li
			className={item.classes.container}
			key={item.i}>
			<p className={item.classes.content}>{item.content}</p>
			<div className={item.classes.buttons}>
				{item.buttons.map((btn: any) => (
					<Button btn={btn} />
				))}
			</div>
		</li>
	)
}
