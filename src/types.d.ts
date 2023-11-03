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

export type Mode = {
	lightMode: boolean;
	darkMode: boolean;
	customMode: boolean;
}

export type ProfileType = {
	value: Custom[];
	name: string;
}