import Image from 'next/image'
import {FetchData} from '@/app/components/FetchData'

export default async function MemesList() {
	const memes = await FetchData()
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
