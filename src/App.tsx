import { useState } from 'react'
import './App.css'
import Mainapp, { itemsType } from './components/Mainapp'

function App() {
	const [checked, setChecked] = useState(false)

	const items: itemsType[] = [
		{
			content: 'something',
			deleteBtn: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
		},
	]

	return (
		<div className='wrapper'>
			<Mainapp
				items={items}
				setChecked={setChecked}
				checked={checked}
			/>
		</div>
	)
}

export default App
