import Image from 'next/image';

export default function Meme({id, title, img, upvotes, downvotes}) {
	return (
		<div key={id}>
			<h4>{title}</h4>
			<Image src={img} alt={title} width={300} height={300} quality={100} />
			<p>Upvotes: {upvotes}</p>
			<p>Downvotes: {downvotes}</p>
		</div>
	);
}
