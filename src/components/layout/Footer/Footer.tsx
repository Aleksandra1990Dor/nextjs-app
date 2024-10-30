'use client'

import styled from '@emotion/styled/base'

const Footer = styled('footer')({
	padding: '40px',
	width: '100%',
	backgroundColor: 'var(--white)',
	display: 'flex',
	justifyContent: 'center',
	position: 'fixed',
	left: 0,
	bottom: 0,
	borderTop: '1px solid var(--secondary)',
	zIndex: 10
})

export default Footer
