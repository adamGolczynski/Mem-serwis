import styles from '@/app/components/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} M&A Websites. All rights reserved. </p>
			<a href='https://github.com/adamGolczynski/Mem-serwis' target='_blank' rel='noopener noreferrer'>
				<FontAwesomeIcon className={styles.icon} icon={faGithub} />
			</a>
		</footer>
	)
}
