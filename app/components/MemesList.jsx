import Image from 'next/image'

async function getMemes() {
	const res = await fetch(`http://localhost:4000/memes`)

	return res.json()
}

export default async function MemesList() {
	const memes = await getMemes()

	return (
		<>
			<h3>Here are the funniest memes on earth!</h3>

			{memes.map(meme => (
				<div key={meme.id}>
					<h4>{meme.title}</h4>
					<Image src={meme.img} alt={meme.title} width={300} height={300} quality={100} />

					<p>Upvotes: {meme.upvotes}</p>
					<p>Downvotes: {meme.downvotes}</p>
				</div>
			))}
		</>
	)
}
