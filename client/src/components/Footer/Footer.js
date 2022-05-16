import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => {
	const [height, setHeight] = useState(0);
	const footerRef = useRef(null);

	useEffect(() => {
		if (footerRef.current) {
			setHeight(footerRef.current.offsetHeight);
		}
	}, [footerRef]);
	return (
		<Fragment>
			<footer ref={footerRef}>
				<section>
					<div>
						<p>
							<strong>Focused Personal Training</strong> <br />
							By Michael Post
						</p>
					</div>
					<div>
						<div className="row">
							<p>Adres</p>
							<p>Treubweg 16 Diemen</p>
						</div>
						<div className="row">
							<p>E-mail</p>
							<p>trainen@michaelpost.nl</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3>Links</h3>
						<div>
							<Link to="/calculator">calculator</Link>
						</div>
					</div>
				</section>
				<section>
					<div>
						<div className="row">
							<p>KVK nummer</p>
							<p>75311631</p>
						</div>
						<div className="row">
							<p>Bank rekening</p>
							<p>NL002242167B62</p>
						</div>
						<div className="row">
							<p>BTW nummer</p>
							<p>NL11 INGB 0009 6917 71</p>
						</div>
					</div>
				</section>
			</footer>
			<div className="footer-window" style={{ height: height }}></div>
		</Fragment>
	);
};
export default Footer;
