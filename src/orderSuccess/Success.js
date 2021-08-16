import React from "react";
import "./success.css";

export const Success = ({ firstName, lastName, close }) => {
	return (
		<div className='success-container'>
			<h1 className='success-title'>{`Thank you ${firstName} ${lastName}!`}</h1>
			<p className='success-message'>
				You're order was not successful placed and your information was not
				stored anywhere as this has no backend. Thank you for your participation
			</p>
			<button className='return-button' onClick={close}>
				Return
			</button>
		</div>
	);
};
