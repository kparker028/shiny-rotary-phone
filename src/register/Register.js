import React from "react";
import "./register.css";
import * as AiIcons from "react-icons/ai";

export const Register = ({ product }) => {
	return (
		<>
			<div className='form-container'>
				<div className='form-exit'>
					<AiIcons.AiOutlineClose />
				</div>
				<h1 className='selected-package'>
					You've Selected the {product.status} Package
				</h1>
				<div>
					<form>
						<input
							name='first_name'
							type='text'
							placeholder='first name'
							required
						/>
						<input
							name='last_name'
							type='text'
							placeholder='last name'
							required
						/>
						<input type='text' placeholder='email' required />
					</form>
				</div>
			</div>
		</>
	);
};
