'use client'

import styled from '@emotion/styled/base'

interface ITypographyProps {
	textWhite?: boolean
}

const Typography = styled('p', {
	shouldForwardProp: prop => prop !== 'textWhite'
})<ITypographyProps>(({ textWhite }) => ({
	fontSize: '16px',
	color: textWhite ? undefined : 'var(--primary)'
}))

export default Typography
