// Styles
import styles from '@/app/components/Loading.module.css'

// Animation
import Lottie from 'lottie-react'
import LoadingDuck from "../animations/duck_loading.json";

export default function Loading() {
	return (
		<section className={styles.loadingWrapper}>
			<p className={styles.loadingTitle}>Just you waiting for a response from db.json...</p>
			<div className={styles.loadingImage}>
			<Lottie animationData={LoadingDuck} loop={true} />
			</div>
		</section>
	)
}
