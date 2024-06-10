'use client'
// Hooks
import { usePathname } from 'next/navigation'

// Components
import Link from 'next/link'
import Image from 'next/image'

// Styles
import styles from './Navbar.module.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

// Fonts
import { alkatra, caveat } from '../font/font';

// Images
import Logo from '@/public/images/mem_logo.png'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className={styles.navBar}>
			<input type='checkbox' id='sidebar-active' className={styles.sidebarActive}/>
			<label htmlFor='sidebar-active' className={styles.openSidebarButton}>
				<FontAwesomeIcon icon={faBars} className={styles.iconStyle} />
			</label>

			<label id='overlay' htmlFor="sidebar-active" className={styles.overlay}></label>

			<div className={`${styles.linksContainer} ${alkatra.className}`}>
				<label htmlFor='sidebar-active' className={styles.closeSidebarButton}>
					<FontAwesomeIcon icon={faX} className={styles.iconStyle} />
				</label>
				<Link className={`${styles.homeLinkLogo} ${styles.link}`} href='/'>
				<Image src={Logo} alt='Mem serwis logo' width={60} quality={100} placeholder='blur' className={styles.logo} />
				<h3 className={`${styles.title} ${caveat.className}`}>Memizer</h3>
				</Link>
				<Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href='/'>
					Home
				</Link>
				<Link className={`${styles.link} ${pathname === '/regular' ? styles.active : ''}`} href='/regular'>
					Regular
				</Link>
				<Link className={`${styles.link} ${pathname === '/hot' ? styles.active : ''}`} href='/hot'>
					Hot
				</Link>
				<Link className={`${styles.link} ${pathname === '/formMem' ? styles.active : ''}`} href='/formMem'>
					Add mem
				</Link>
			</div>
		</nav>
	)
}
