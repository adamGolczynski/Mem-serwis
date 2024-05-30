import fs from 'fs'
import path from 'path'
import Meme from './Meme'

export default function RegularMemesList() {
	const filePath = path.join(process.cwd(), 'app', 'data', 'db.json')
	const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

	const regularMemes = jsonData.memes.filter(meme => meme.upvotes - meme.downvotes < 5)

	return (
		<>
			<h3>Here are the boring memes :/ </h3>

			{regularMemes.map(regularMem => (
				<Meme
					id={regularMem.id}
					title={regularMem.title}
					img={regularMem.img}
					upvotes={regularMem.upvotes}
					downvotes={regularMem.downvotes}
				/>
			))}
		</>
	)
}
