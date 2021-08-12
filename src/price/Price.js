import React from "react";
import "./price.css";
export const Price = ({ cost }) => {
	return (
		<div>
			<p className='cost'>{cost} </p>
		</div>
	);
};
