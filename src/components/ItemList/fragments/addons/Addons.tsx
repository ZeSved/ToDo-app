export default function Addons() {
	const addons: addons[] = [
		{
			name: 'link',
		},
		{
			name: 'comment',
		},
		{
			name: 'image',
		},
	]

	function testForVowel(name: string) {
		return /^[aeiou]/i.test(name)
	}

	return (
		<div>
			{addons.map((addon, i) => (
				<button key={i}>
					Add {testForVowel(addon.name) ? 'an' : 'a'} {addon.name}
				</button>
			))}
		</div>
	)
}

type addons = {
	name: string
}
