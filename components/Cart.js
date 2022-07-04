import React, { useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import roast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';

const Cart = ({ open, onClose }) => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
	// if the modal is not open, don't render out any content
	if (!open) return null;
	return (
		<div ref={cartRef}>
			<div onClick={onClose} className="cart__overlay"></div>
			<div className="cart__card">
				<div className="cart__header">
					<h6>Cart <span className='cart__items-num'>(3)</span></h6>
					<span>Remove all</span>
				</div>
				<div className="card__total">
					<span>Total</span>
					<span>$5,396</span>
				</div>
				<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
					Checkout
				</Button>
			</div>
		</div>
	);
};

export default Cart;
