import styles from "@/app/components/NotMemesFound.module.css"

export default function NotMemesFound() {
	return (
		<section className={styles.notFoundWrapper}>
			<p className={styles.notFoundTitle}>If you ever feel useless, look at this memes list without MEMES!</p>
			<div className={styles.notFoundImage}></div>
			<p className={styles.notFoundText}>PATHETIC!</p>
		</section>
	)
}
