import React from 'react';
import '../App.css';
import PayPalBtn from './PayPalBtn';

class Cart extends React.Component {
	
	
	cartItem = this.props.cartProducts.map((d) => {
		return (
			<div className="cartProduct" key={d.id}>
				<img src={d.image} alt="" className="image" />
				<h3>{d.title}</h3>
				<h4>{d.category}</h4>
				<h5>${d.price}</h5>
				<button
					onClick={() => {
						this.props.handlePieceIncrease(d.id);
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						this.props.handlePieceReduction(d.id);
					}}
				>
					-
				</button>
				<span className="piece-count">{this.props.pieceCount}</span>
				<span className="piece-plural">pcs</span>
				<button
					onClick={() => {
						this.props.removeItem(d.id);
					}}
				>
					Remove Item from Cart
				</button>
			</div>
		);
	});

	paymentHandler = (details, data) => {
		alert(details, data);
	};

	render() {
		return (
			<div className="cart-container">
				<div className="clear-cart-btn-container">
					<button className="clear-cart-btn" onClick={this.props.clearCart}>
						Clear Cart
					</button>
				</div>

				<div className="cart-display-list">{this.cartItem}</div>
				<div className="proceed-to-checkout-btn-container">
					<button className="proceed-to-checkout-btn">Proceed to Checkout</button>
				</div>
				<PayPalBtn amount={200} currency={'USD'} onSuccess={this.paymentHandler} />
			</div>
		);
	}
}

export default Cart;
