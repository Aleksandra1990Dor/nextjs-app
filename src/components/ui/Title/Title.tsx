import { PropsWithChildren } from 'react'
import { TitleDefault, TitleMain, TitleSmall } from './TitleStyled'

interface ITitleProps {
	variant?: 'main' | 'default' | 'small'
	isLarge?: boolean
}

const Title = (props: PropsWithChildren<ITitleProps>) => {
	const { variant = 'default', children, isLarge } = props

	return (
		<>
			{variant === 'default' && <TitleDefault>{children}</TitleDefault>}
			{variant === 'main' && (
				<TitleMain isLarge={isLarge}>{children}</TitleMain>
			)}
			{variant === 'small' && (
				<TitleSmall isLarge={isLarge}>{children}</TitleSmall>
			)}
		</>
	)
}

export default Title
