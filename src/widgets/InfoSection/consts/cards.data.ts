import { CardItem } from '../types/card.types'

export const cards: CardItem[] = Array.from({ length: 6 }).map((_, index) => ({
	id: index,
	title: 'Title',
	text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo tenetur pariatur voluptate quasi ea aliquam, officia dolore similique'
}))
