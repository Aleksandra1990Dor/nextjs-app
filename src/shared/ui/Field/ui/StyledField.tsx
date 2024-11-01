'use client'

import styled from '@emotion/styled/base'
import { TextField } from '@mui/material'

import { inputLabelClasses } from '@mui/material/InputLabel'

const StyledField = styled(TextField)({
	'& label': {
		color: '#c2b8af',
		fontFamily: 'inherit',

		[`&.${inputLabelClasses.shrink}`]: {
			color: '#c2b8af'
		}
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'var(--secondary)',
			transition: 'border-color .5s ease'
		},
		'&.Mui-focused fieldset': {
			borderColor: '#c2b8af'
		}
	}
})

export default StyledField
