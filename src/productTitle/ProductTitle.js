import React from "react";
import "./title.css";

export const ProductTitle = ({ title }) => {
	return (
		<div>
			<h1 className='title'>{title}</h1>
		</div>
	);
};
