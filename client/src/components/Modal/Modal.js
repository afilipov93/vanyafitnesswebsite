import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const ModalOverlay = (props) => {
	const preventParentHanlder = (e) => {
		e.stopPropagation();
	};
	const content = (
		<CSSTransition
			in={props.show}
			timeout={200}
			classNames="modal"
			mountOnEnter
			unmountOnExit
		>
			<div className="modal-wrapper" onClick={props.onCancel}>
				<div
					className={`modal ${props.className || ''}`}
					style={props.style}
					onClick={(e) => preventParentHanlder(e)}
				>
					{props.image && (
						<div
							className={`modal__image ${props.imageClass || ''}`}
							style={{ backgroundImage: `url(${props.image})` }}
						></div>
					)}
					<div className="modal-content-wrapper">
						<header className={`modal__header ${props.headerClass || ''}`}>
							<h2>{props.header}</h2>
						</header>
						<div className={`modal__content ${props.contentClass || ''}`}>
							{props.children}
						</div>
						<footer
							className={`modal__footer ${props.footerClass || ''}`}
						></footer>
						{props.footer}
					</div>
				</div>
			</div>
		</CSSTransition>
	);
	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <Backdrop onClick={props.onCancel} />}
			<ModalOverlay {...props} />
		</React.Fragment>
	);
};
export default Modal;
