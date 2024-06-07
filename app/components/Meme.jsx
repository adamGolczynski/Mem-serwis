'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { alkatra } from '../font/font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/components/Meme.module.css';

export default function Meme({ id, title, img, upvotes, downvotes, updateHotMemes, updateRegularMemes, updateAllMemes }) {
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
				updateHotMemes?.(id, memeUpvotes + 1, memeDownvotes);
				updateRegularMemes?.(id, memeUpvotes + 1, memeDownvotes);
				updateAllMemes?.(id, memeUpvotes + 1, memeDownvotes);
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
				updateHotMemes?.(id, memeUpvotes, memeDownvotes + 1);
				updateRegularMemes?.(id, memeUpvotes, memeDownvotes + 1);
				updateAllMemes?.(id, memeUpvotes, memeDownvotes + 1);
			}
		} catch (error) {
			console.error('Error updating downvotes:', error);
		}
	};

	return (
		<div className={`${styles.wrapper} ${alkatra.className}`} key={id}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={img} alt={title} />
			</div>
			<div className={styles.buttonsWrapper}>
				<button className={styles.button} onClick={handleUpvote}>
					<FontAwesomeIcon className={styles.icon} icon={faThumbsUp} /> {memeUpvotes}
				</button>
				<button className={styles.button} onClick={handleDownvote}>
					<FontAwesomeIcon className={styles.icon} icon={faThumbsDown} /> {memeDownvotes}
				</button>
			</div>
		</div>
	);
}
