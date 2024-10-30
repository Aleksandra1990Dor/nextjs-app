import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MainLayout } from '@/components/layout'

import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 500 900'
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 500 900'
})

export const metadata: Metadata = {
	title: 'Main page',
	description: 'Main page for test website'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider options={{ key: 'css' }}>
					<MainLayout>{children}</MainLayout>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
