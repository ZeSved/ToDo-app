import { Custom, Item, Mode } from '../../types'

import ItemInput from './ItemInput/ItemInput'
import ItemList from './ItemList/ItemList'
import Stats from './Stats/Stats'

export default function TodoList({
	items,
	setItems,
	warningDisplay,
	setWarningDisplay,
	favorite,
	setFavorite,
	currentTheme,
	mode,
	setToast,
}: TodoListType) {
	return (
		<>
			<ItemInput
				currentTheme={currentTheme}
				warningDisplay={warningDisplay}
				items={items}
				favorite={favorite}
				setWarningDisplay={setWarningDisplay}
				setItems={setItems}
				setFavorite={setFavorite}
				setToast={setToast}
			/>
			<div
				className='dividerMain'
				style={{ background: currentTheme[1].color }}
			/>
			<ItemList
				mode={mode}
				currentTheme={currentTheme}
				items={items}
				setItems={setItems}
				setFavorite={setFavorite}
				favorite={favorite}
			/>
			<div
				className='dividerMain'
				style={{ background: currentTheme[1].color }}
			/>
			<Stats
				mode={mode}
				currentTheme={currentTheme}
				items={items}
			/>
		</>
	)
}

type TodoListType = {
	setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>
	setWarningDisplay: React.Dispatch<React.SetStateAction<string | undefined>>
	setFavorite: React.Dispatch<React.SetStateAction<boolean>>
	items: Item[]
	warningDisplay: string | undefined
	favorite: boolean
	currentTheme: Custom[]
	mode: Mode
	setToast: React.Dispatch<React.SetStateAction<string | undefined>>
}
