'use client'
// Hooks
import { useState, useEffect } from 'react'

// Components
import Meme from './Meme'
import Loading from '@/app/components/Loading'
import NotMemesFound from './NotMemesFound'

// Styles
import styles from '@/app/components/Lists.module.css'

// Fonts
import { caveat } from '../font/font';

const filterRegularMemes = memes => {
	return memes.filter(meme => meme.upvotes - meme.downvotes < 5)
}

export default function RegularMemesList() {
	const [regularMemes, setRegularMemes] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchMemes = async () => {
			try {
				const response = await fetch('/api/memes')
				const memes = await response.json()
				setRegularMemes(filterRegularMemes(memes))
			} catch (error) {
				console.error('Error fetching memes:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchMemes()
	}, [])

	const updateRegularMemes = (id, updatedUpvotes, updatedDownvotes) => {
		setRegularMemes(prevRegularMemes => {
			const updatedMemes = prevRegularMemes.map(meme => {
				if (meme.id === id) {
					return { ...meme, upvotes: updatedUpvotes, downvotes: updatedDownvotes }
				}
				return meme
			})
			return filterRegularMemes(updatedMemes)
		})
	}

	return (
		<main className={`${styles.listContainer} ${caveat.className}`}>
		<h2 className={styles.listTitle}>Here you can find memes which have a lots of hidden talents!</h2>
				{isLoading ? (
					<Loading />
				) : regularMemes.length > 0 ? (
					regularMemes.map(regularMeme => (
						<Meme
							key={regularMeme.id}
							id={regularMeme.id}
							title={regularMeme.title}
							img={regularMeme.img}
							upvotes={regularMeme.upvotes}
							downvotes={regularMeme.downvotes}
							updateRegularMemes={updateRegularMemes}
						/>
					))
				) : (
					<NotMemesFound />
				)}
		</main>
	)
}
