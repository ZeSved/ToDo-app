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
		type: 'set-warning'
		payload: string[] | undefined
	}
	| {
		type: 'set-toast'
		payload: string
	}
	| {
		type: 'set-favorite' | 'set-settings-dropdown' | 'set-profile-dropdown'
		payload: boolean
	}
	| {
		type: 'set-mode'
		payload: string
	}
	| {
		type: 'set-custom-profile'
		payload: ProfileType[] | []
	}
	| {
		type: 'set-current-theme'
		payload: Custom[]
	}
	| {
		type: 'set-only-checked'
		payload: boolean
	}
	| {
		type: 'set-clear-buttons'
		payload: boolean
	}

export type List = {
	items: Item[];
	input: string,
	warning: string[] | undefined;
	favorite: boolean;
	toast: string;
	settingsDropdown: boolean;
	mode: string
	currentTheme: Custom[];
	profileDropdown: boolean;
	customProfile: ProfileType[] | [];
	onlyChecked: boolean,
	clearButtons: boolean,
}

export type Item = {
	checked: boolean
	content: string
	favorite: boolean
}

export type Custom = {
	name: string;
	color: string;
	content: string
}

export type ProfileType = {
	value: Custom[];
	name: string;
}

export type ToastMessage = {
	clearedChecked: string;
	clearedAll: string;
	appliedTheme: string;
	savedProfile: string
}

export type SavedData = {
	items: Item[]
	currentTheme: Custom[]
	customProfile: ProfileType[] | []
}