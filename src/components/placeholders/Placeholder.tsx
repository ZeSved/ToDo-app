import './Placeholder.module.scss'

export default function Placeholders({ amount }: HolderProps) {
	if (amount >= 1)
		for (let i = 0; i > amount; i++) {
			return <div className='placeholder' />
		}
}

interface HolderProps {
	amount: number
}
