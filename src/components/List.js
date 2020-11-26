import React from 'react';
import '../App.css';

const List = (props) => {
	const eachItem = props.trendywear.map((d) => {
		return (
			<div className="item" key={d.id}>
				<img src={d.image} alt="" className="image" />
				<h3>{d.title}</h3>
				<h4>{d.category}</h4>
				<h5>${d.price}</h5>
				<button
					onClick={() => {
						props.handleCart(d.id);
					}}
				>
					Add to Cart
				</button>
			</div>
		);
	});
	return <div className="list">{eachItem}</div>;
};

export default List;
