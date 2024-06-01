import fs from 'fs';
import path from 'path';
import Meme from './Meme';

export default function RegularMemesList() {
	const filePath = path.join(process.cwd(), 'app', 'data', 'db.json');
	const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

	const regularMemes = jsonData.memes.filter((meme) => meme.upvotes - meme.downvotes < 5);

	return (
		<>
			<h3>Here are the boring memes :/ </h3>

			{regularMemes.length > 0 ? regularMemes.map((regularMeme) => <Meme key={regularMeme.id} id={regularMeme.id} title={regularMeme.title} img={regularMeme.img} upvotes={regularMeme.upvotes} downvotes={regularMeme.downvotes} />) : <p>No regular memes found.</p>}
		</>
	);
}
