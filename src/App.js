import React from 'react';
import Landing from './Landing';
import Cart from './components/Cart';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			clothes: [],
			itemNumber: 0,
			cartItems: [],
			pieceNumber: 1,
			filteredCartItems: [],
		};

		this.handlePieceReduction = this.handlePieceReduction.bind(this);
		this.handlePieceIncrease = this.handlePieceIncrease.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.handleCart = this.handleCart.bind(this);
		this.clearCart = this.clearCart.bind(this);
		this.getCartData = this.getCartData.bind(this);
	}
	getCartData() {
		let store = JSON.parse(localStorage.getItem('cartStore'));
		if (store != null) {
			this.setState({
				cartItems: store,
			});
		}
	}
	componentDidMount() {
		
		this.getCartData();
		this.setState({
			isLoading: true,
		});
		fetch('https://fakestoreapi.com/products')
			.then((resp) => resp.json())
			.then((d) => {
				this.setState({
					isLoading: false,
					clothes: d,
				});
				console.log(this.state.clothes);
			});
	}

	handleCart(id) {
		var prevStored;
		if (this.state.cartItems >= 1) {
			prevStored = this.state.cartItems.map((d) => {
				return d.id;
			});
		}
		if (prevStored === id) {
			return;
		} else {
			const cartList = this.state.clothes.filter((d) => {
				return d.id === id;
			});
			const cartValue = [...this.state.cartItems, ...cartList];
			this.setState({
				cartItems: cartValue,
				itemNumber: cartValue.length,
			});
			localStorage.setItem('cartStore', JSON.stringify(cartValue));
		}
	}

	handlePieceIncrease(id) {
		this.state.cartItems.filter((d) => {
			if (d.id === id) {
				this.setState((prevState) => {
					return {
						pieceNumber: prevState.pieceNumber + 1,
					};
				});
			}
		});
	}

	handlePieceReduction(id) {
		if (this.state.pieceNumber === 0) {
			return;
		} else {
			this.state.cartItems.filter((d) => {
				if (d.id === id) {
					this.setState((prevState) => {
						return {
							pieceNumber: prevState.pieceNumber - 1,
						};
					});
				}
			});
		}
	}

	removeItem(id) {
		const filteredCartList = this.state.cartItems.filter((d) => {
			return d.id !== id;
		});

		const filteredCart = [...this.state.filteredCartItems, ...filteredCartList];
		this.setState({
			cartItems: filteredCart,
			itemNumber: filteredCart.length,
		});
		localStorage.setItem('cartStore', JSON.stringify(filteredCart));
	}

	clearCart() {
		localStorage.removeItem('cartStore');
		if (this.state.itemNumber === 0) {
			return;
		} else {
			this.setState({
				cartItems: [],
				itemNumber: 0,
			});
		}
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Header header={this.state.itemNumber} />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => {
								return (
									<Landing
										{...props}
										loading={this.state.isLoading}
										wears={this.state.clothes}
										handleCart={this.handleCart}
									/>
								);
							}}
						/>
						<Route
							exact
							path="/components/Cart"
							render={(props) => {
								return (
									<Cart
										{...props}
										cartProducts={this.state.cartItems}
										pieceCount={this.state.pieceNumber}
										handlePieceIncrease={this.handlePieceIncrease}
										handlePieceReduction={this.handlePieceReduction}
										removeItem={this.removeItem}
										clearCart={this.clearCart}
									/>
								);
							}}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
