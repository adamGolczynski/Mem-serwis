import { FetchData } from './FetchData';
import Meme from './Meme';

export default async function RegularMemesList() {
	const memes = await FetchData();

	const regularMemes = memes.filter((meme) => meme.upvotes - meme.downvotes < 5);

	return (
		<>
			<h3>Here are the boring memes :/ </h3>

			{regularMemes.map((regularMem) => (
				<Meme id={regularMem.id} title={regularMem.title} img={regularMem.img} upvotes={regularMem.upvotes} downvotes={regularMem.downvotes} />
			))}
		</>
	);
}
