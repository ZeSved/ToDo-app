export type Action =
	| {
		type: 'set-items'
		payload: Item[]
	}
	| {
		type: 'set-input'
		payload: string
	}
	| {
		type: 'set-favorite' | 'set-only-checked' | 'set-clear-buttons'
		payload: boolean
	}

export type List = {
	items: Item[];
	input: string,
	favorite: boolean;
	onlyChecked: boolean,
	clearButtons: boolean,
}

export type Item = {
	checked: boolean
	content: string
	favorite: boolean
}

export type SavedData = {
	items: Item[]
}