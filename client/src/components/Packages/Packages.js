import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { numbersWithSeperators } from '../../snippets';

import './Packages.css';
import Button from '../Button/Button';

const Packages = (props) => {
	const handleAddPackage = (data) => {
		props.package(data);
		props.onClick();
	};
	return props.items.map((deals) => {
		return (
			<Card
				id={deals.id}
				key={deals.id}
				title={deals.title}
				services={deals.services}
				price={deals.price}
				onClick={props.onClick}
				addPackage={(data) => handleAddPackage(data)}
			/>
		);
	});
};

const Card = (props) => {
	const handlePackageSelect = (props) => {
		props.addPackage(props.id);
	};
	return (
		<article className="card">
			<h3 className="card__title">{props.title}</h3>
			<div className="card__CTA">
				<Button secondair onClick={() => handlePackageSelect(props)}>
					selecteer
				</Button>
			</div>
			<div className="card__content">
				{props.services.map((items) => {
					return (
						<ul className="card__list" key={Math.random()}>
							<li className="card__listItem" key={Math.random()}>
								{items.interval}x {items.duration}min trainen
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.location}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.schema}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.reschedule}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.nutrition || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.tests || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.planning || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.evaluation || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.timeAroundTraining || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.whatsapp || <FontAwesomeIcon icon="xmark" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.merchandise || <FontAwesomeIcon icon="xmark" />}
							</li>
						</ul>
					);
				})}
			</div>
		</article>
	);
};
export default Packages;
