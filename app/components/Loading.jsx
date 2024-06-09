import styles from '@/app/components/Loading.module.css'
import Lottie from 'lottie-react'
import anime from "../animations/duck_loading.json";
export default function Loading() {
	return (
		<section className={styles.loadingWrapper}>
			<p className={styles.loadingTitle}>Just you waiting for a response from db.json...</p>
			<div className={styles.loadingImage}>
			<Lottie animationData={anime} loop={true} />
			</div>
		</section>
	)
}
