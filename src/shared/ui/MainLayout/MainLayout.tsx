import type { FC, PropsWithChildren } from 'react'

import { Title } from '@/shared/ui'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HeaderNavButton from '../HeaderNavButton/HeaderNavButton'

import MainWrapper from './ui/MainWrapper'
import ContentContainer from './ui/ContentContainer'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<MainWrapper>
			<Header>
				<Title variant='small'>Some Company</Title>
				<HeaderNavButton />
			</Header>
			<ContentContainer>{children}</ContentContainer>
			<Footer>
				<Title variant='small'>Some Fixed Footer</Title>
			</Footer>
		</MainWrapper>
	)
}

export default MainLayout
