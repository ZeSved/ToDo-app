import { List, Action, ToastMessage } from '../../types/types'

import Toast from './Toast/Toast'
import Warning from './Warning/Warning'

export default function Popups({ list, dispatch, toastMessage }: PopupsProps) {
	return (
		<>
			<Toast
				list={list}
				dispatch={dispatch}
			/>
			<Warning
				toastMessage={toastMessage}
				dispatch={dispatch}
				list={list}
			/>
		</>
	)
}

type PopupsProps = {
	dispatch: React.Dispatch<Action>
	list: List
	toastMessage: ToastMessage
}
