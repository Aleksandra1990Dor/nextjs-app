'use client'

import styled from '@emotion/styled/base'
import {
	FormControl,
	FormHelperText,
	TextField,
	Typography
} from '@mui/material'
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { inputLabelClasses } from '@mui/material/InputLabel'

const StyledField = styled(TextField)({
	'& label': {
		color: '#c2b8af',

		[`&.${inputLabelClasses.shrink}`]: {
			color: '#c2b8af'
		}
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'var(--secondary)'
		},
		'&.Mui-focused fieldset': {
			borderColor: '#c2b8af'
		}
	}
})

const LabelText = styled(Typography)<{ component: string }>({
	fontWeight: 600,
	marginBottom: '8px',
	fontSize: '14px'
})

interface IFieldProps<T extends FieldValues> {
	label: string
	error?: FieldError
	register: UseFormRegister<T>
	name: Path<T>
	isTextarea?: boolean
}

const Field = <T extends FieldValues>(props: IFieldProps<T>) => {
	const { error, label, register, name, isTextarea = false } = props

	const { ref, ...inputProps } = register(name, {
		required: `${label} is required field`
	})

	return (
		<FormControl size='medium' error={!!error}>
			<LabelText component='h5'>{label}: </LabelText>
			<StyledField
				label={label}
				id={name}
				inputRef={ref}
				multiline={isTextarea}
				rows={4}
				error={!!error}
				{...inputProps}
			/>
			{error && <FormHelperText>{error.message}</FormHelperText>}
		</FormControl>
	)
}
export default Field
