import RegularMemesList from '../components/RegularMemesList'
import Loading from '@/app/components/Loading';
import { Suspense } from 'react'

export default function Regular() {
	return (
		<main>
			<h2>Regular</h2>
			<Suspense fallback={<Loading />}>
				<RegularMemesList />
			</Suspense>
		</main>
	)
}
