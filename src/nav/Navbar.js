import React from "react";
import * as GiIcons from "react-icons/gi";
import "./navbar.css";

export const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='menu-options'>
				<span className='home'>Home</span>
				<span className='about'>About</span>
				<span className='catalog'>Catalog</span>
			</div>
			<div className='branding'>
				<span className='logo'>
					<GiIcons.GiPawHeart
						style={{
							height: "50px",
							width: "50px",
							lineHeight: "0px",
							margin: 0,
							cursor: "pointer",
						}}
					/>
				</span>
				<h3 className='company'>Dog World</h3>
			</div>
		</div>
	);
};
