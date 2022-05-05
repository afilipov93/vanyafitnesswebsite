import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { numbersWithSeperators } from '../../snippets';

import './Packages.css';

const Packages = (props) => {
	return props.items.map((deals) => {
		return (
			<Card
				key={deals.id}
				title={deals.title}
				services={deals.services}
				price={deals.price}
			/>
		);
	});
};

const Card = (props) => {
	return (
		<article className="card">
			<h3 className="card__title">{props.title}</h3>
			<div className="card__price">
				&euro;&nbsp;{numbersWithSeperators(props.price)},-
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
								{items.nutrition || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.tests || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.planning || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.evaluation || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.timeAroundTraining || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.whatsapp || <FontAwesomeIcon icon="times" />}
							</li>
							<li className="card__listItem" key={Math.random()}>
								{items.merchandise || <FontAwesomeIcon icon="times" />}
							</li>
						</ul>
					);
				})}
			</div>
		</article>
	);
};
export default Packages;
