import React from 'react';
import './App.css';
import image from './cartImage.jpg';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className="header-container">
			<h2 className="heading">Trendy Wears</h2>
			<div className="header">
				<h4>Cart:</h4>
				<div className="cart">
					<Link to="/components/Cart">
						<img src={image} alt="" className="cart-image" />
					</Link>

					<span className="item-number">{props.header}</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
