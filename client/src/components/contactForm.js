import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import './ContactForm.css';
import Button from './Button/Button';

const ContactForm = (props) => {
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm({
		defaultValues: {
			package: props.package || '',
		},
	});
	const [feedback, setFeedback] = useState('Verstuur');

	useEffect(() => {
		return () => props.cleanup();
	});

	const onSubmitHandler = async (data, event) => {
		setFeedback('Verzenden...');
		event.preventDefault();

		axios
			.post('/sendEmail', { data })
			.then(function (respone) {
				reset();
				setFeedback('Verzonden!!');
			})
			.catch(function (error) {
				console.log(error);
				setFeedback('Verstuur');
			});
	};
	const onError = (err) => {};

	return (
		<div>
			<form
				id="contact-form"
				className="contact-form"
				onSubmit={handleSubmit(onSubmitHandler, onError)}
			>
				<div className="row">
					<input
						type="text"
						name="name"
						className={errors.name ? 'input error' : 'input'}
						placeholder="Voornaam"
						{...register('name', { required: true, minLength: 3 })}
					/>
					<input
						type="text"
						name="surname"
						className={errors.surname ? 'input error' : 'input'}
						placeholder="Achternaam"
						{...register('surname', { required: true, minLength: 3 })}
					/>
				</div>
				<div className="row">
					<input
						type="tel"
						name="phone"
						className={errors.phone ? 'input error' : 'input'}
						placeholder="Je telefoonnummer"
						{...register('phone', { required: true, minLength: 3 })}
					/>
					<input
						type="email"
						name="email"
						className={errors.email ? 'input error' : 'input'}
						placeholder="Je emailadres"
						{...register('email', {
							required: true,
							pattern:
								/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
					/>
				</div>
				<div className="row">
					<select
						{...register('package', {
							required: false,
						})}
					>
						<option value="">Kies Pakket</option>
						<option value="light-focus">Light focus</option>
						<option value="fair-focus">Fair focus</option>
						<option value="total-focus">Total focus</option>
						<option value="hyper-focus">Hyper focus</option>
					</select>
				</div>
				<div className="row">
					<textarea
						rows={6}
						name="message"
						className={
							errors.message ? 'input textarea error' : 'input textarea'
						}
						placeholder="Omschrijf kort je wens"
						{...register('message', { required: true })}
					/>
				</div>
				{Object.values(errors).length !== 0 && (
					<div className="row">
						<span className="errorMessage">
							Het formulier is niet correct ingevuld controleer de velden
						</span>
					</div>
				)}
				<div className="row">
					<Button secondair type="submit">
						{feedback}
					</Button>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
