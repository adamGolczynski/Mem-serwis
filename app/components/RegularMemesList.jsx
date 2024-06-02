'use client'

import { useState, useEffect, Suspense } from 'react'
import Meme from './Meme'
import Loading from '@/app/components/Loading'

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
		<>
			<h3>Here are the boring memes :/</h3>

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
				<p>No regular memes found.</p>
			)}
		</>
	)
}
