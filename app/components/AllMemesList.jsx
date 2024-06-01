'use client'

import { useState, useEffect, Suspense } from 'react'
import Meme from './Meme'
import Loading from '@/app/components/Loading'

export default function AllMemesList() {
	const [allMemes, setAllMemes] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchMemes = async () => {
			try {
				const response = await fetch('/api/memes')
				const memes = await response.json()
				setAllMemes(memes)
			} catch (error) {
				console.error('Error fetching memes:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchMemes()
	}, [])

	const updateAllMemes = (id, updatedUpvotes, updatedDownvotes) => {
		setAllMemes(prevAllMemes => {
			const updatedMemes = prevAllMemes.map(meme => {
				if (meme.id === id) {
					return { ...meme, upvotes: updatedUpvotes, downvotes: updatedDownvotes }
				}
				return meme
			})
			return updatedMemes
		})
	}

	return (
		<>
			<h1>Here are the funniest memes on earth!</h1>

			<Suspense fallback={<Loading />}>
				{isLoading ? (
					<Loading />
				) : allMemes.length > 0 ? (
					allMemes.map(meme => (
						<Meme
							key={meme.id}
							id={meme.id}
							title={meme.title}
							img={meme.img}
							upvotes={meme.upvotes}
							downvotes={meme.downvotes}
							updateHotMemes={updateAllMemes}
						/>
					))
				) : (
					<p>No memes found.</p>
				)}
			</Suspense>
		</>
	)
}
