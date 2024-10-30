'use client'
import type { FC } from 'react'

import { Field, Form } from '@/components/form-elements'
import { Title, LoadingButton } from '@/components/ui'

import { useContactForm } from '../hooks/useContactForm'
import ContactFormSuccess from './ContactFormSuccess'
import { CircularProgress } from '@mui/material'

const ContactForm: FC = () => {
	const { errors, submitFn, register, isLoading, isSuccess } = useContactForm()

	return (
		<>
			{!isSuccess && (
				<Form onSubmit={submitFn}>
					<Title variant='small'>Form title</Title>
					<Field
						label='Name'
						error={errors.name}
						name='name'
						register={register}
					/>
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
						loading={isLoading}
						loadingIndicator={
							<CircularProgress sx={{ color: 'var(--white)' }} size={16} />
						}
					>
						Submit
					</LoadingButton>
				</Form>
			)}
			{isSuccess && <ContactFormSuccess />}
		</>
	)
}

export default ContactForm
