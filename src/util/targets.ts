import { AppTabs } from "../types/types"

export function targetCurrent(arr: AppTabs[], i: number, decidedTab?: boolean) {
	const newArr = [...arr]

	newArr.forEach((tab) => {
		tab.isSelected = false
	})

	decidedTab ? newArr[newArr.findIndex(a => a.tabName === window.localStorage.getItem('lastOpened'))].isSelected : newArr[i].isSelected = true

	window.localStorage.setItem('lastOpened', newArr[i].tabName)

	return newArr
}

export function targetNone(arr: AppTabs[]) {
	const newArr = [...arr]

	newArr.forEach((tab) => {
		tab.isSelected = false
	})

	return newArr
}

// export function targetSpecific(arr: AppTabs[]) {

// }