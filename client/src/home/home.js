import React from 'react';
import Trigger from '../trigger/trigger';
import Banner from '../banner/banner';
import Testimonial from '../testimonial/testimonial';
import TextBlock from '../textBlock/textBlock';
import Emphasized from '../emphasized/emphasized';

class Home extends React.Component {
	render() {
		return (
			<main>
				<Trigger content={this.props.data.home} />
				<TextBlock content={this.props.data.home} />
				{/* <Testimonial content={this.props.data.home} /> */}
				<Emphasized content={this.props.data.home} />
				<Banner content={this.props.data.home} />
			</main>
		);
	}
}
export default Home;
