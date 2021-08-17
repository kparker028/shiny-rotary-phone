import React, { useState, useEffect } from "react";
import "./register.css";
import * as AiIcons from "react-icons/ai";
import Aos from "aos";
import { Success } from "../orderSuccess/Success";

export const Register = ({ product, closeForm }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		Aos.init({ duration: 6000 });
	}, []);

	return (
		<div className='form-container'>
			{!showSuccess ? (
				<>
					<div
						className='form-exit'
						data-aos='fade-up'
						data-aos-anchor-placement='top-center'
						onClick={() => closeForm(!product)}
					>
						<AiIcons.AiOutlineClose
							style={{
								height: "25px",
								width: "25px",
								marginLeft: "85%",
								paddingTop: "8px",
							}}
						/>
					</div>
					<h1 className='selected-package'>
						You've Selected the {product.status} Package
					</h1>
					<div>
						<form className='form'>
							<input
								value={firstName}
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								type='text'
								placeholder='first name'
								required
							/>
							<input
								value={lastName}
								onChange={(e) => {
									setLastName(e.target.value);
								}}
								type='text'
								placeholder='last name'
								required
							/>
						</form>
						<div className='submit-button-container'>
							<button
								type='submit'
								className='submit-form'
								onClick={() => {
									firstName && lastName
										? setShowSuccess(true)
										: alert("please fill in first name and last name");
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</>
			) : (
				<Success firstName={firstName} lastName={lastName} close={closeForm} />
			)}
		</div>
	);
};
