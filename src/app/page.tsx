import type { Metadata } from 'next'

import { MainPage } from '@/app-pages'

export const metadata: Metadata = {
	title: 'Main page',
	description: 'Main page for test website'
}

export default function Home() {
	return <MainPage />
}
