export type Action =
	| {
		type: 'set-items'
		payload: Item[]
	}
	| {
		type: 'set-input' | 'set-tab-input'
		payload: string
	}
	| {
		type: 'set-favorite'
		payload: boolean
	}
	| {
		type: 'set-tabs'
		payload: AppTabs[]
	}

export type List = {
	items: Item[];
	input: string,
	favorite: boolean;
	tabInput: string,
	tabs: AppTabs[]
}

export type AppTabs = {
	tabName: string;
	isSelected: boolean,
	allChecked: Boolean
}

export type Item = {
	checked: boolean
	content: string
	favorite: boolean
}

export type SavedData = {
	items: Item[]
	tabs: AppTabs[]
}