'use client'
import type { Dispatch, FC, SetStateAction } from 'react'
import { CircularProgress } from '@mui/material'

import { Title, LoadingButton, Field, Form } from '@/shared/ui'
import { useContactForm } from '@/entities/contact'

import { loaderStyles } from './consts/form-styles'

type ContactFormPageProps = {
	setIsSuccess: Dispatch<SetStateAction<boolean>>
}

const ContactForm: FC<ContactFormPageProps> = ({ setIsSuccess }) => {
	const { errors, submitFn, register, isLoading } = useContactForm(setIsSuccess)

	return (
		<Form onSubmit={submitFn}>
			<Title variant='small'>Form title</Title>
			<Field label='Name' error={errors.name} name='name' register={register} />
			<Field
				label='Email'
				error={errors.email}
				name='email'
				register={register}
			/>
			<Field
				label='Message'
				error={errors.message}
				name='message'
				register={register}
				isTextarea
			/>
			<LoadingButton
				type='submit'
				isLarge
				loading={isLoading}
				loadingIndicator={<CircularProgress sx={loaderStyles} />}
			>
				Submit
			</LoadingButton>
		</Form>
	)
}

export default ContactForm
