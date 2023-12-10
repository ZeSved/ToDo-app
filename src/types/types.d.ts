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
		type: 'set-favorite'
		payload: boolean
	}

export type List = {
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