import type { FC } from 'react'

import { MainSection, InfoSection, ContactsSection } from '@/widgets'

const MainPage: FC = () => {
	return (
		<>
			<MainSection />
			<InfoSection />
			<ContactsSection />
		</>
	)
}

export default MainPage
