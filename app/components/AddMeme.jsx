'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from '@/app/components/AddMeme.module.css';

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
				alert('Your meme was added! :) You can see it on the home page');
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
		<main className={styles.wrapper}>
			<h2 className={styles.header}>You got any gems? Add it below!</h2>
			{formError && <p>{formError}</p>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.inputWrapper}>
					<input className={styles.input} type='text' placeholder='Title of the meme' {...register('title', { required: 'Title is required' })} />
					{errors.title && <span>{errors.title.message}</span>}
				</div>
				<div className={styles.inputWrapper}>
					<input className={styles.input} type='text' placeholder='Meme image URL' {...register('img', { required: 'Image URL is required' })} />
					{errors.img && <span>{errors.img.message}</span>}
				</div>
				<div className={styles.buttonWrapper}>
					<button className={styles.buttonAdd} type='submit'>
						Add Meme
					</button>
				</div>
			</form>
		</main>
	);
}
