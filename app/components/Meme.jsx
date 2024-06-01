'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Meme({ id, title, img, upvotes, downvotes }) {
	const [memeUpvotes, setMemeUpvotes] = useState(upvotes);
	const [memeDownvotes, setMemeDownvotes] = useState(downvotes);
	const pathname = usePathname();

    useEffect(() => {
        setMemeUpvotes(upvotes);
        setMemeDownvotes(downvotes);
    }, [pathname, upvotes, downvotes]);


	const handleUpvote = async () => {
		try {
			const response = await fetch('/api/memes', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, upvotes: memeUpvotes + 1, downvotes: memeDownvotes }),
			});

			if (response.ok) {
				setMemeUpvotes(memeUpvotes + 1);
			}
		} catch (error) {
			console.error('Error updating upvotes:', error);
		}
	};

	const handleDownvote = async () => {
		try {
			const response = await fetch('/api/memes', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, upvotes: memeUpvotes, downvotes: memeDownvotes + 1 }),
			});

			if (response.ok) {
				setMemeDownvotes(memeDownvotes + 1);
			}
		} catch (error) {
			console.error('Error updating downvotes:', error);
		}
	};

	return (
		<div key={id}>
			<h4>{title}</h4>
			<Image src={img} alt={title} width={300} height={300} quality={100} />
			<p>Upvotes: {memeUpvotes}</p>
			<p>Downvotes: {memeDownvotes}</p>
			<div>
				<button onClick={handleUpvote}>👍 {memeUpvotes}</button>
				<button onClick={handleDownvote}>👎 {memeDownvotes}</button>
			</div>
		</div>
	);
}
