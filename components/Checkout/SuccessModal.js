import React, { useRef, useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import Button from '../Button.js';
import Link from 'next/link';
import Image from 'next/image';

const productItems = 1;

const SuccessModal = () => {
	const { totalPrice, totalQuantities, cartItems, onRemove, grandTotal, Shipping, Vat } = useStateContext();

	let summaryTotal = grandTotal;
	summaryTotal = parseFloat(totalPrice + Vat + Shipping).toLocaleString();

	const [next, setNext] = useState(productItems);
	const handleMoreImage = () => {
		setNext(next + productItems);
	};
	return (
		// <div ref={cartRef}>
		<div>
			<div className="cart__overlay"></div>
			<div className="success">
				<h3 className="success--title">Thank you for your order</h3>
				<p className="success--text">You will receive an email confirmation shortly</p>
				<div className="success__items">
					<div className="success__products">
						{cartItems.length >= 1 &&
							cartItems?.slice(0, next)?.map((item) => (
								<div key={item.id}>
									<div className="cart__product">
										<div className="cart__images">
											<Image className="cart__image" src={item.image.mobile} alt="Headphones" width={64} height={64} />
										</div>
										<div className="cart__product-details">
											<span className="cart--name">{item.cartName}</span>
											<span className="cart--price">${item.price}</span>
										</div>
										<div className="cart__toggle">
											<span className="success--quantity">x{item.quantity}</span>
										</div>
									</div>
								</div>
							))}
						{next < cartItems.length && (
							<div onClick={handleMoreImage}>
								<hr className="success__line"></hr>
								<p className="success__more">and {totalQuantities} other items(s)</p>
							</div>
						)}
					</div>
					<div className="success__total">
						<span className="success__total-text">Grand Total</span>
						<h6 className="success__total-number">${summaryTotal}</h6>
					</div>
				</div>
				<div>
					<Link href="/">
						<Button onClick={() => onRemove(cartItems)} className="btn" buttonStyle="btn--primary" buttonSize="btn--cart">
							Back to Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SuccessModal;
