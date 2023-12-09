export type Action =
	| {
		type: 'set-items'
		payload:
		// {
		// 	type: 'parent'
		// 	payload: Item[]
		// } | {
		// 	type: 'child'
		// 	payload: SubItems[]
		// }
		Item[]
	}
	| {
		type: 'set-input'
		payload: string
	}
	| {
		type: 'set-favorite'
		payload: boolean
	}
	| {
		type: 'set-name'
		payload: string
	}
	| {
		type: 'set-selected'
		payload: boolean
	}

export type MainApp = {
	tabs: Tab[]
}

export type Tab = {
	name: string
	isSelected: boolean
	items: Item[];
	input: string,
	favorite: boolean;
}

export type Item = {
	checked: boolean
	content: string
	favorite: boolean
	subItems: SubItems[]
}

export type SubItems = {
	checked: boolean
	content: string
}

export type SavedData = {
	items: Item[]
}