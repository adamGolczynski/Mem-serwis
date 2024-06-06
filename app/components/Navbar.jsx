'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './mem_logo.png'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
	const pathname = usePathname()

	return (
		<nav className={styles.navBar}>
			<input type='checkbox' id='sidebar-active' className={styles.sidebarActive}/>
			<label htmlFor='sidebar-active' className={styles.openSidebarButton}>
				<FontAwesomeIcon icon={faBars} className={styles.iconStyle} />
			</label>

			<label id='overlay' htmlFor="sidebar-active" className={styles.overlay}></label>

			<div className={styles.linksContainer}>
				<label htmlFor='sidebar-active' className={styles.closeSidebarButton}>
					<FontAwesomeIcon icon={faX} className={styles.iconStyle} />
				</label>
				<Link className={`${styles.homeLink} ${styles.link}`} href='/'>
				<Image src={Logo} alt='Mem serwis logo' width={60} quality={100} placeholder='blur' className={styles.logo} />
				<h3 className={styles.title}>Memizer</h3>
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
