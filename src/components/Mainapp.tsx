import styles from './styles/Mainapp.module.css'
import image from '../images/_delete_ symbol.png'

export default function Mainapp({ items }: itemsInterface) {
	return (
		<div className={styles.main}>
			<textarea className={styles.itemInput} />
			<div className={styles.container}>
				{items.map((item, i) => (
					<div
						className={styles.itemContainer}
						key={i}>
						<button
							className={styles.checkBtn}
							onClick={item.checked}></button>
						<p className={styles.itemContent}>{item.content}</p>

						<button
							className={styles.deleteBtn}
							onClick={item.deleteBtn}>
							<img
								src={image}
								alt=''
							/>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

interface itemsInterface {
	items: itemsType[]
}

export type itemsType = {
	content: string
	deleteBtn: () => void
	checked: () => void
}
