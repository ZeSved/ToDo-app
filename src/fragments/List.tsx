import { AppTabs, Item } from '../types/types'
import ListItem from './ListItem'

export default function List({ itemArr }: ListProps) {
	return (
		<div>
			<ul>
				{itemArr.map((arr, i) => (
					<ListItem
						item={arr}
						i={i}
					/>
				))}
			</ul>
		</div>
	)
}

interface ListProps {
	itemArr: ListType[]
}

type ListType = {
	list: (AppTabs | Item)[]
}
