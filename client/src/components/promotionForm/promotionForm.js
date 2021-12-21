import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const PromotionForm = (props) => {
	const [feedback, setFeedback] = useState('Plan mijn afspraak');
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setFeedback('Verzenden...');
		emailjs
			.sendForm(
				'service_1ezv6al',
				'template_ygsbadk',
				e.target,
				'user_UgwxCI8vkvoM4sC0kXBNG'
			)
			.then(
				function (response) {
					reset();
					setFeedback('Verzonden!!');
				},
				function (error) {
					console.log(error);
					setFeedback('Plan mijn afspraak');
				}
			);
	};
	return (
		<form onSubmit={(e) => handleSubmit(onSubmitHandler(e))}>
			<h3>{props.title}</h3>
			<label>Naam</label>
			<input
				name="name"
				type="text"
				className={errors.name ? 'input error' : 'input'}
				{...register('name', { required: true, minLength: 3 })}
			/>
			<label>Telefoonnummer</label>
			<input
				name="phone"
				type="tel"
				className={errors.phone ? 'input error' : 'input'}
				{...register('phone', { required: true })}
			/>
			<label>E-mail</label>
			<input
				name="email"
				type="email"
				className={errors.email ? 'input error' : 'input'}
				{...register('email', {
					required: true,
					pattern:
						/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				})}
			/>
			<button type="submit">{feedback}</button>
		</form>
	);
};
export default PromotionForm;
