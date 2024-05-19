import styles from './page.module.css';
import MemesList from '@/app/components/MemesList';

export default function Home() {
	return (
		<main className={styles.main}>
			<h2>Home</h2>
			<MemesList />
		</main>
	);
}
