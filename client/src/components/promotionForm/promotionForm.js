import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PromotionForm = (props) => {
	const [feedback, setFeedback] = useState('Plan mijn afspraak');
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();

	const onSubmitHandler = async (data, event) => {
		setFeedback('Verzenden...');
		event.preventDefault();
		console.log(data);

		axios
			.post('/sendemail', { data })
			.then(function (response) {
				reset();
				setFeedback('Verzonden!!');
			})
			.catch(function (error) {
				console.log(error);
				setFeedback('Plan mijn afspraak');
			});
	};
	const onError = () => {
		console.log('Fout!');
	};
	return (
		<form onSubmit={handleSubmit(onSubmitHandler, onError)}>
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
