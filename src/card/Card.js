import React from "react";
import { ProductTitle } from "../productTitle/ProductTitle";
import { Duration } from "../duration/Duration";
import { Features } from "../features/Features";
import { Price } from "../price/Price";

export const Card = ({ product }) => {
	return (
		<div className='card-container'>
			<ProductTitle title={product.status} />
			<Duration duration={product.duration} />
			<Features features={product.features} />
			<Price cost={product.price} />
		</div>
	);
};
