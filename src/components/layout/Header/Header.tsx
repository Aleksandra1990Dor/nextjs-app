'use client'

import styled from '@emotion/styled/base'

const Header = styled('header')({
	width: '100%',
	padding: '30px 40px 20px 40px',
	backgroundColor: 'var(--white)',
	display: 'flex',
	justifyContent: 'space-between',
	position: 'fixed',
	left: 0,
	top: 0,
	borderBottom: '1px solid var(--bg)',
	zIndex: 10
})

export default Header
