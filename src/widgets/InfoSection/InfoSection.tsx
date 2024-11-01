import type { FC } from 'react'
import { Grid2 } from '@mui/material'
import Link from 'next/link'

import { Button, Card, Section, Title, Typography } from '@/shared/ui'
import { ROUTES_DATA } from '@/shared/consts'

import { cards } from './consts/cards.data'

const InfoSection: FC = () => {
	return (
		<Section gap='40px' colored>
			<Title>Also very important title</Title>
			<Grid2
				container
				columnSpacing={{ lg: 4, xs: 2 }}
				rowSpacing={4}
				justifyContent={{ xs: 'center', md: 'space-between' }}
				px={{ xs: 3, sm: 0 }}
			>
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
