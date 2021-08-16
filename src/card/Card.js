import React, { useState } from "react";
import "./card.css";
import { ProductTitle } from "../productTitle/ProductTitle";
import { Duration } from "../duration/Duration";
import { Features } from "../features/Features";
import { Price } from "../price/Price";
import { Register } from "../register/Register";

export const Card = ({ product }) => {
	const [level, setLevel] = useState(false);

	const openForm = (product) => {
		setLevel(product);
	};
	return (
		<div className='card-container'>
			<div className='top'>
				<ProductTitle title={product.status} />
				<Duration duration={product.duration} />
			</div>
			<Features features={product.features} />
			<div className='bottom'>
				<Price cost={product.price} />
				<button className='subscribe-button' onClick={() => openForm(product)}>
					Subscribe Now
				</button>
			</div>
			{level === product && <Register product={product} closeForm={openForm} />}
		</div>
	);
};
