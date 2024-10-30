'use client'

import type { FC } from 'react'
import Form from '../form-elements/Form/Form'
import { Button, Title } from '../ui'
import Field from '../form-elements/Field/Field'
import { useContactForm } from './useContactForm'

const ContactForm: FC = () => {
	const { errors, submitFn, register } = useContactForm()

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
			<Button type='submit'>Submit</Button>
		</Form>
	)
}

export default ContactForm
