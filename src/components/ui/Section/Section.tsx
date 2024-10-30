'use client'

import styled from '@emotion/styled/base'

interface ISectionProps {
	colored?: boolean
	flexDirection?: 'row' | 'column'
	gap?: string
}

const Section = styled('section', {
	shouldForwardProp: prop =>
		prop !== 'colored' && prop !== 'flexDirection' && prop !== 'gap'
})<ISectionProps>(({ colored, flexDirection = 'column', gap = '10px' }) => ({
	padding: flexDirection === 'column' ? '80px' : '40px 80px',
	backgroundColor: colored ? undefined : 'var(--bg-secondary)',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	minWidth: '100%',
	flexDirection,
	gap
}))

export default Section
