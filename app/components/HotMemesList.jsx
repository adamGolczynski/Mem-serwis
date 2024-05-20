import Meme from './Meme';
import { FetchData } from '@/app/components/FetchData';

export default async function HotMemesList() {
	const memes = await FetchData();
	const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes >= 5);

	return (
		<>
			<h3>Here are the HOTTEST memes on earth!</h3>

			{hotMemes.map((hotMeme) => (
				<Meme id={hotMeme.id} title={hotMeme.title} img={hotMeme.img} upvotes={hotMeme.upvotes} downvotes={hotMeme.downvotes} />
			))}
		</>
	);
}
