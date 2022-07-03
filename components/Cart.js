import React, { useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import roast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
	return (
		<div ref={cartRef}>
			<div className="cart__overlay"></div>
			{/* <Button onClick={()=> setShowCart(false)} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
				Add to cart
			</Button> */}
			<div className="cart__header">
				<h3>Cart(3)</h3>
				<span>Remove all</span>
			</div>
		</div>
	);
};

export default Cart;
