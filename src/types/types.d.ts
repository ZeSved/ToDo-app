import { URLProps } from "../util/getTargetURL"

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
	| {
		type: 'set-tab-input'
		payload: string
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
	tabURL: string;
	isSelected: boolean
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