import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = ({ title }) => {
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();

	function onSubmit(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1ezv6al',
				'template_567p95z',
				e.target,
				'user_UgwxCI8vkvoM4sC0kXBNG'
			)
			.then(
				function (response) {
					reset();
				},
				function (error) {
					console.log(error);
				}
			);
	}

	return (
		<div>
			<form
				id="contact-form"
				className="contact-form"
				onSubmit={(e) => handleSubmit(onSubmit(e))}
			>
				<div className="row">
					<p>{title}</p>
				</div>
				<div className="row">
					<input
						type="text"
						name="fullName"
						className={errors.fullName ? 'input error' : 'input'}
						placeholder="Je naam"
						{...register('fullName', { required: true, minLength: 3 })}
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
					<button className="button secondair" type="submit">
						Verstuur
					</button>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
