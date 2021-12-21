import React from 'react';
import Heading from '../components/heading';
import Img from '../components/img';

class Lessons extends React.Component {
	render() {
		const c = this.props.data.lessons;

		const rows = c.map((content) => {
			return (
				<div key={content.row.article.title.value} className="row">
					<section className="col-2 col emphasized container">
						<article className="highlight text-block">
							<div className="text-container">
								<h2>{content.row.article.title.value}</h2>
								<p>{content.row.article.text.value}</p>
								{/* <div className="price-container">
									<span className="price">
										&euro;&nbsp;{content.row.article.price.value},-
									</span>
									<span className="price-split">
										{content.row.article.price.subValue}
									</span>
								</div> */}
							</div>
						</article>
						<article>
							<div className="image-container">
								<Img
									object={content}
									id={content.row.images.map((data) => data.id).join()}
								/>
							</div>
						</article>
					</section>
				</div>
			);
		});

		return (
			<main className="lessons">
				<Heading title="Lessen" />
				{rows}
			</main>
		);
	}
}
export default Lessons;
