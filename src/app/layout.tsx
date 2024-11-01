import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

import { MainLayout } from '@/shared/ui'
import { geistMono } from '@/shared/assets'

import '@/shared/assets/globals.css'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistMono.variable}`}>
				<AppRouterCacheProvider options={{ key: 'css' }}>
					<MainLayout>{children}</MainLayout>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
