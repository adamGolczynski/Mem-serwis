import Image from 'next/image'
import {FetchData} from '@/app/components/FetchData'

export default async function HotMemesList() {
	const memes = await FetchData()
    const hotMemes = memes.filter(meme => (meme.upvotes - meme.downvotes >= 5))

	return (
		<>
			<h3>Here are the HOTTEST memes on earth!</h3>

			{hotMemes.map(hotMem => (
				<div key={hotMem.id}>
					<h4>{hotMem.title}</h4>
					<Image src={hotMem.img} alt={hotMem.title} width={300} height={300} quality={100} />
					<p>Upvotes: {hotMem.upvotes}</p>
					<p>Downvotes: {hotMem.downvotes}</p>
				</div>
			))}
		</>
	)
}