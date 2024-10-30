import type { FC } from 'react'
import { Button, Card, Section, Title, Typography } from '@/components/ui'
import { Grid2 } from '@mui/material'
import Link from 'next/link'
import { ROUTES_DATA } from '@/consts/router.data'

interface ICardItem {
	id: number
	title: string
	text: string
}

const cards: ICardItem[] = Array.from({ length: 6 }).map((_, index) => ({
	id: index,
	title: 'Title',
	text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo tenetur pariatur voluptate quasi ea aliquam, officia dolore similique'
}))

const InfoSection: FC = () => {
	return (
		<Section gap='40px' colored>
			<Title>Also very important title</Title>
			<Grid2 container spacing={4} justifyContent={'space-between'}>
				{cards.map(card => (
					<Card isSmall key={card.id}>
						<Title variant='small'>{card.title}</Title>
						<Typography>{card.text}</Typography>
					</Card>
				))}
			</Grid2>
			<Button LinkComponent={Link} href={ROUTES_DATA.contactUs}>
				Contact us
			</Button>
		</Section>
	)
}

export default InfoSection
