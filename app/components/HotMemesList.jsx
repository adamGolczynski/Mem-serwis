import fs from 'fs';
import path from 'path';
import Meme from './Meme';

export default function HotMemesList() {
	const filePath = path.join(process.cwd(), 'app', 'data', 'db.json');
	const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

	const hotMemes = jsonData.memes.filter((meme) => meme.upvotes - meme.downvotes >= 5);

	return (
		<>
			<h3>Here are the HOTTEST memes on earth!</h3>

			{hotMemes.length > 0 ? hotMemes.map((hotMeme) => <Meme key={hotMeme.id} id={hotMeme.id} title={hotMeme.title} img={hotMeme.img} upvotes={hotMeme.upvotes} downvotes={hotMeme.downvotes} />) : <p>No hot memes found.</p>}
		</>
	);
}
