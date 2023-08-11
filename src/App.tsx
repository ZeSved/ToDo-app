import './App.css'
import Mainapp, { itemsType } from './components/Mainapp'

function App() {
	const items: itemsType[] = [
		{
			content: 'something',
			deleteBtn: () => {},
			checked: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
			checked: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
			checked: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
			checked: () => {},
		},
		{
			content: 'something',
			deleteBtn: () => {},
			checked: () => {},
		},
	]

	return (
		<div className='wrapper'>
			<Mainapp items={items} />
		</div>
	)
}

export default App
