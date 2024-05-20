import { FetchData } from './FetchData';
import Image from 'next/image';

export default async function RegularMemesList() {
	const memes = await FetchData();

	const regularMemes = memes.filter((meme) => meme.upvotes - meme.downvotes < 5);

	return (
		<>
			<h3>Here are the boring memes :/ </h3>

			{regularMemes.map((regularMem) => (
				<div key={regularMem.id}>
					<h4>{regularMem.title}</h4>
					<Image src={regularMem.img} alt={regularMem.title} width={300} height={300} quality={100} />
					<p>Upvotes: {regularMem.upvotes}</p>
					<p>Downvotes: {regularMem.downvotes}</p>
				</div>
			))}
		</>
	);
}
