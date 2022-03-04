import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = ({ title }) => {
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();
	const [feedback, setFeedback] = useState('Verstuur');

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
					<p>{title}</p>
				</div>
				<div className="row">
					<input
						type="text"
						name="name"
						className={errors.name ? 'input error' : 'input'}
						placeholder="Je naam"
						{...register('name', { required: true, minLength: 3 })}
					/>
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
					<textarea
						rows={6}
						name="message"
						className={
							errors.message ? 'input textarea error' : 'input textarea'
						}
						placeholder="Bericht"
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
					<button className="button primair" type="submit">
						{feedback}
					</button>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
