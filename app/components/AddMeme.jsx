'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function AddMeme() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [memes, setMemes] = useState([]);
	const [formError, setFormError] = useState(null);

	const onSubmit = async (data) => {
		try {
			const response = await fetch('/api/memes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...data, upvotes: 0, downvotes: 0 }),
			});

			if (response.ok) {
				const newMeme = await response.json();
				setMemes([...memes, newMeme]);
				reset();
			} else {
				setFormError('Failed to add meme');
			}
		} catch (error) {
			console.error('Error adding meme:', error);
			setFormError('Failed to add meme');
		}
	};

	return (
		<div>
			<h2>Add Meme</h2>
			{formError && <p>{formError}</p>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='title'>Title:</label>
					<input type='text' id='title' {...register('title', { required: 'Title is required' })} />
					{errors.title && <span>{errors.title.message}</span>}
				</div>
				<div>
					<label htmlFor='img'>Image URL:</label>
					<input type='text' id='img' {...register('img', { required: 'Image URL is required' })} />
					{errors.img && <span>{errors.img.message}</span>}
				</div>
				<button type='submit'>Add Meme</button>
			</form>
			<div>
				{memes.map((meme) => (
					<div key={meme.id}>
						<h4>{meme.title}</h4>
						<img src={meme.img} alt={meme.title} />
					</div>
				))}
			</div>
		</div>
	);
}
