import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PromotionForm = (props) => {
	const [feedback, setFeedback] = useState('Plan mijn afspraak');
	const [backgroundImage, setBackgroundImage] = useState(props.c);
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();

	const onSubmitHandler = async (data, event) => {
		setFeedback('Verzenden...');
		event.preventDefault();

		axios
			.post('/sendemailpromotion', { data })
			.then(function (response) {
				reset();
				setFeedback('Verzonden!!');
			})
			.catch(function (error) {
				console.log(error);
				setFeedback('Plan mijn afspraak');
			});
	};
	const onError = (err) => {};
	return (
		<section className="promotion-form-container">
			<form
				className="promotion"
				onSubmit={handleSubmit(onSubmitHandler, onError)}
			>
				<h3>{props.title}</h3>
				<div className="form-body">
					<section className="form-field">
						<label>Naam</label>
						<input
							name="name"
							type="text"
							className={errors.name ? 'input error' : 'input'}
							{...register('name', { required: true, minLength: 3 })}
						/>
						{errors.name && (
							<span className="error">Dit veld is niet goed ingevuld</span>
						)}
					</section>
					<section className="form-field">
						<label>Telefoonnummer</label>
						<input
							name="phone"
							type="tel"
							className={errors.phone ? 'input error' : 'input'}
							{...register('phone', { required: true })}
						/>
						{errors.phone && (
							<span className="error">Dit veld is niet goed ingevuld</span>
						)}
					</section>
					<section className="form-field">
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
						{errors.email && (
							<span className="error">Dit veld is niet goed ingevuld</span>
						)}
					</section>
				</div>
				<section className="submit-container">
					<button type="submit" className="button">
						{feedback}
					</button>
				</section>
			</form>
			<div className="image-container">
				<div style={{ backgroundImage: `url(${backgroundImage})` }} />
			</div>
		</section>
	);
};
export default PromotionForm;
