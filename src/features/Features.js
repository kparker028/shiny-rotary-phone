import React from "react";
import "./features.css";

export const Features = ({ features }) => {
	return (
		<div>
			<ul className='feature-list'>
				{features.map((feature) => (
					<li className='feature'>{feature} </li>
				))}
			</ul>
		</div>
	);
};
