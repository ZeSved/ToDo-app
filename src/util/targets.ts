import { AppTabs } from "../types/types"

export function targetCurrent(arr: AppTabs[], i: number) {
	const newArr = [...arr]

	newArr.forEach((tab) => {
		tab.isSelected = false
	})

	newArr[i].isSelected = true

	return newArr
}

export function unselect(arr: AppTabs[]) {
	const newArr = [...arr]

	newArr.forEach((tab) => {
		tab.isSelected = false
	})

	return newArr
}