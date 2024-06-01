import styles from './page.module.css'
import AllMemesList from '@/app/components/AllMemesList'


export default function Home() {
	return (
		<main className={styles.main}>
			<h2>Home</h2>
				<AllMemesList />

		</main>
	)
}
