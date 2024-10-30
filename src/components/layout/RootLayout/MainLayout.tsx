import type { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Title } from '@/components/ui'
import HeaderNavButton from '../Header/HeaderNavButton'
import { ContentContainer, MainWrapper } from '../Wrappers/Wrappers'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<MainWrapper>
			<Header>
				<Title variant='small'>Some Company</Title>
				<HeaderNavButton />
			</Header>
			<ContentContainer>{children}</ContentContainer>
			<Footer>
				<Title variant='small'>Some Company</Title>
			</Footer>
		</MainWrapper>
	)
}

export default MainLayout
