'use client'

import { FormControl, FormHelperText } from '@mui/material'
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import LabelText from './ui/LabelText'
import StyledField from './ui/StyledField'

type FieldProps<T extends FieldValues> = {
	label: string
	error?: FieldError
	register: UseFormRegister<T>
	name: Path<T>
	isTextarea?: boolean
}

const Field = <T extends FieldValues>(props: FieldProps<T>) => {
	const { error, label, register, name, isTextarea = false } = props

	const { ref, ...inputProps } = register(name, {
		required: `${label} is required field`
	})

	return (
		<FormControl size='medium' error={!!error} sx={{}}>
			<LabelText>{label}: </LabelText>
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
