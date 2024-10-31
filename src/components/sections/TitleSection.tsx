import { type FC } from 'react'
import { Card, Section, Title, Typography, VideoPlayer } from '@/components/ui'

const TitleSection: FC = () => {
	return (
		<Section flexDirection='row' gap='300px'>
			<Card>
				<Title variant='main'>Most important title on the page</Title>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
					tenetur pariatur voluptate quasi ea aliquam, officia dolore similique
					nobis corporis modi minus ullam id? Nulla aperiam cumque iste
					mollitia.
				</Typography>
			</Card>
			<VideoPlayer />
		</Section>
	)
}

export default TitleSection
