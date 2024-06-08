'use client'

import { useState, useEffect } from 'react'
import Meme from './Meme'
import Loading from '@/app/components/Loading'
import styles from '@/app/components/Lists.module.css'

const filterHotMemes = memes => {
	return memes.filter(meme => meme.upvotes - meme.downvotes >= 5)
}

export default function HotMemesList() {
	const [hotMemes, setHotMemes] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchMemes = async () => {
			try {
				const response = await fetch('/api/memes')
				const memes = await response.json()
				setHotMemes(filterHotMemes(memes))
			} catch (error) {
				console.error('Error fetching memes:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchMemes()
	}, [])

	const updateHotMemes = (id, updatedUpvotes, updatedDownvotes) => {
		setHotMemes(prevHotMemes => {
			const updatedMemes = prevHotMemes.map(meme => {
				if (meme.id === id) {
					return { ...meme, upvotes: updatedUpvotes, downvotes: updatedDownvotes }
				}
				return meme
			})
			return filterHotMemes(updatedMemes)
		})
	}

	return (
		<main className={styles.listContainer}>
		<h1 className={styles.listTitle}>There are the HOTTEST MEMES!</h1>
				{isLoading ? (
					<Loading />
				) : hotMemes.length > 0 ? (
					hotMemes.map(hotMeme => (
						<Meme
							key={hotMeme.id}
							id={hotMeme.id}
							title={hotMeme.title}
							img={hotMeme.img}
							upvotes={hotMeme.upvotes}
							downvotes={hotMeme.downvotes}
							updateHotMemes={updateHotMemes}
						/>
					))
				) : (
					<p>No hot memes found.</p>
				)}
		</main>
	)
}
