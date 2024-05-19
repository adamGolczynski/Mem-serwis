'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './mem_logo.png'
import styles from './Navbar.module.css'

export function Navbar() {
	const pathname = usePathname()

	return (
		<nav className={styles.navbar}>
			<Image
			src={Logo}
			alt='Mem serwis logo'
			width={70}
			quality={100}
			placeholder='blur'
			/>
			<h3>Mem serwis</h3>
			<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
				Home
			</Link>
			<Link className={`link ${pathname === '/regular' ? 'active' : ''}`} href='/regular'>
				Regular
			</Link>
			<Link className={`link ${pathname === '/hot' ? 'active' : ''}`} href='/hot'>
				Hot
			</Link>
			<Link className={`link ${pathname === '/formMem' ? 'active' : ''}`} href='/formMem'>
				Add mem
			</Link>
			<Link className={`link ${pathname === '/favourites' ? 'active' : ''}`} href='/favourites'>
				Your favourites
			</Link>
		</nav>
	)
}
