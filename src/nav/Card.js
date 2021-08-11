import React from "react";
import "./card.css";

export const Card = ({ title, duration, features, price }) => {
	return (
		<div>
			<h1 className='card-title'>{title}</h1>
			<h3 className='duration'>{duration}</h3>
			<ul className='feature-list'>
				<li className='feature'>{features}</li>
			</ul>
			<p className='price'>{price}</p>
		</div>
	);
};
