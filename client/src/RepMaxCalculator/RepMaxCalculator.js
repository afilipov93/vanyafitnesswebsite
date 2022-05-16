import React, { Fragment, useState } from 'react';
import Button from '../components/Button/Button';

import './RepMaxCalculator.css';

const RepMaxCalculator = (props) => {
	const [table, setTable] = useState([]);
	const [reps, setReps] = useState('');
	const [weight, setWeight] = useState('');

	const roundHalf = (num) => {
		return (Math.round(num * 4) / 4).toFixed(2);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTable([]);
		const repMax = weight * (36 / (37 - reps));
		let table = [];
		for (var i = 1; i <= 20; i++) {
			table.push(roundHalf((repMax * (37 - i)) / 36));
		}
		setTable(table);
	};

	return (
		<Fragment>
			<div className="wrapper">
				<section className="container">
					<h1>1RM calculator</h1>
				</section>
			</div>
			<div className="wrapper">
				<section className="container">
					<form onSubmit={(e) => handleSubmit(e)}>
						<h3>Vul je gegevens in om je 1 rep max uit te rekenen</h3>
						<label htmlFor="reps">De reps:</label>
						<input
							name="reps"
							type="number"
							id="reps"
							value={reps}
							onChange={(e) => setReps(e.target.value)}
						/>
						<label htmlFor="weight">Het gewicht (kg):</label>
						<input
							name="weight"
							type="number"
							id="weight"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
						<Button secondair type="submit" disabled={!reps}>
							Bereken
						</Button>
					</form>
				</section>
			</div>
			{table.length > 0 && (
				<div className="wrapper">
					<section className="container">
						<MaxCalc number={table} />
					</section>
				</div>
			)}
		</Fragment>
	);
};

const MaxCalc = (props) => {
	const data = props.number;
	const values = data.map((weigth, index) => {
		return (
			<div key={weigth}>
				<p>{index + 1}</p>
				<p>{weigth}</p>
			</div>
		);
	});
	return (
		<div className="outcome-container">
			<div className="outcome__quote">
				<div>
					<h2>
						Jouw 1 rep max is: <span>{data[0]} kg</span>
					</h2>
				</div>
			</div>
			<section className="outcome__content">
				<div className="outcome__title">
					<p>Reps</p>
					<p>Gewicht</p>
				</div>
				{values}
			</section>
		</div>
	);
};
export default RepMaxCalculator;
