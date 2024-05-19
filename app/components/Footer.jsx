import styles from '@/app/components/Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} M&A Websites. All rights reserved. </p>
		</footer>
	);
}
