import { FetchData } from '@/app/components/FetchData';
import Meme from './Meme';

export default async function AllMemesList() {
	const memes = await FetchData();
	return (
		<>
			<h3>Here are the funniest memes on earth!</h3>

			{memes.map((meme) => (
				<Meme id={meme.id} title={meme.title} img={meme.img} upvotes={meme.upvotes} downvotes={meme.downvotes} />
			))}
		</>
	);
}
