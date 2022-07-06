import React, { useRef } from 'react';
import Link from 'next/link';
import Button from './Button';
import roast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';

const Cart = ({ open, onClose }) => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, toggleCartItemQuantity } = useStateContext();
	// if the modal is not open, don't render out any content
	if (!open) return null;
	return (
		<div ref={cartRef}>
			<div onClick={onClose} className="cart__overlay"></div>
			<div className="cart__card">
				<div className="cart__header">
					<h6>
						Cart <span className="cart__items-num">({totalQuantities})</span>
					</h6>
					<span>Remove all</span>
				</div>
				<div className="cart__item">
					<div className="cart__empty">
						{cartItems.length < 1 && (
							<div>
								<h6>Empty Cart</h6>
								<p>Your shopping cart is empty</p>
							</div>
						)}
					</div>
					<div className="cart__full">
						{cartItems.length >= 1 &&
							cartItems.map((item) => (
								<div className="cart__products" key={item.id}>
									<div className="cart__product">
										<div className="cart__image">
											<Image src={item.image.mobile} alt="Headphones" width={64} height={64} />
										</div>
										<div className="cart__product-details">
											<span className="cart--name">{item.cartName}</span>
											<span className="cart--price">${item.price}</span>
										</div>
										<div>
											<div className="cart__add">
												<span onClick={() => toggleCartItemQuantity(item.id, 'dec')} className="cart__decrement">
													-
												</span>
												<span className="cart__number">{item.quantity}</span>
												<span onClick={() => toggleCartItemQuantity(item.id, 'inc')} className="cart__increment">
													+
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						{cartItems.length >= 1 && (
							<div className="cart__total">
								<span className="cart__total--text">Total</span>
								<span className="cart__total--price">${totalPrice}</span>
							</div>
						)}
						<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--cart">
							Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
