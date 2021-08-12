import React from "react";
import "./card.css";
import { ProductTitle } from "../productTitle/ProductTitle";
import { Duration } from "../duration/Duration";
import { Features } from "../features/Features";
import { Price } from "../price/Price";

export const Card = ({ product }) => {
	return (
		<div className='card-container'>
			<div className='top'>
				<ProductTitle title={product.status} />
				<Duration duration={product.duration} />
			</div>
			<Features features={product.features} />
			<Price cost={product.price} />
			<button className='subscribe-button'>Subscribe Now</button>
		</div>
	);
};
