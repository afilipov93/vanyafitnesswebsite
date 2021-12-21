import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';

const ActionBanner = (props) => {
	const [cookies, setCookie] = useCookies(['disableBanner']);
	const useToggle = (initialState) => {
		const [isToggled, setIsToggled] = useState(initialState);

		// put [setIsToggled] into the useCallback's dependencies array
		// this value never changes so the callback is not going to be ever re-created
		const toggle = useCallback(
			() => setIsToggled((state) => !state),
			[setIsToggled]
		);
		return [isToggled, toggle];
	};
	const createCookie = () => {
		var now = new Date();
		now.setTime(now.getTime() + 1 * 3600 * 1000);
		console.log(now);

		setCookie('showBanner', false, { path: '/', expires: now });
	};
	const [isShow, toggleShow] = useToggle(true);
	const Clickhandler = () => {
		toggleShow();
		createCookie();
	};

	return (
		<div className={isShow ? 'show action-wrapper' : 'hide action-wrapper'}>
			<div className="action-container">
				<h4>
					<a href="/actie">Naar de Actiepagina</a>
				</h4>
				<button onClick={Clickhandler}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			</div>
		</div>
	);
};

export default ActionBanner;
