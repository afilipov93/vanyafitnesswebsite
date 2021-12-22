import React from 'react';
import Heading from '../components/heading';
import PromotionForm from '../components/promotionForm/promotionForm';

const Discount = (props) => {
	const c = props.data.promotion;

	return (
		<main className="promotion">
			<Heading title="Kennismakingskorting" />
			{c.map((rows) => (
				<div className="row" key={Math.random()}>
					<section className="container col">
						{rows.row.article.map((article) => {
							console.log(article);
							return (
								<div
									key={Math.random()}
									className={`text-container ${article.class}`}
								>
									{article.text.type === 'h2' && <h2>{article.text.value}</h2>}
									{article.text.type === 'p' && <p>{article.text.value}</p>}
									{article.text.type === 'blockquote' && (
										<blockquote>{article.text.value}</blockquote>
									)}
								</div>
							);
						})}
					</section>
				</div>
			))}
			<div className="row">
				<div className="container col center" style={{ marginTop: '4rem' }}>
					<PromotionForm
						// c={props.data.contact.find(function (d) {
						// 	return d.type === 'personalData';
						// })}
						c={props.data.contact[0].row.images[0].image.link}
						title="Meld je aan!"
					/>
				</div>
			</div>
		</main>
	);
};

export default Discount;
