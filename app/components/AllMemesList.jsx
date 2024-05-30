import fs from 'fs'
import path from 'path'
import Meme from './Meme'

export default function AllMemesList() {
	const filePath = path.join(process.cwd(), 'app', 'data', 'db.json')
	const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

	return (
		<>
			<h1>Here are the funniest memes on earth!</h1>
			{jsonData.memes.map(meme => (
				<Meme
					key={meme.id}
					id={meme.id}
					title={meme.title}
					img={meme.img}
					upvotes={meme.upvotes}
					downvotes={meme.downvotes}
				/>
			))}
		</>
	)
}
