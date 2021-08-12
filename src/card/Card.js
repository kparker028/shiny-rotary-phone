import React, { useState } from "react";
import "./card.css";
import { ProductTitle } from "../productTitle/ProductTitle";
import { Duration } from "../duration/Duration";
import { Features } from "../features/Features";
import { Price } from "../price/Price";
import { Register } from "../register/Register";

export const Card = ({ product }) => {
	const [level, setLevel] = useState(0);

	const getSubscription = (product) => {
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
				<button
					onClick={() => getSubscription(product)}
					className='subscribe-button'
				>
					Subscribe Now
				</button>
			</div>
			{level === product && <Register product={product} />}
		</div>
	);
};
