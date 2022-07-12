import React, { useRef } from 'react';
import { useStateContext } from '../../context/StateContext';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';

const SuccessModal = ({ open, onClose }) => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, toggleCartItemQuantity, onRemove, grandTotal } = useStateContext();

	// if the modal is not open, don't render out any content
	if (!open) return null;
	console.log(grandTotal);

	const back = () => {
		onClose();
	};

	return (
		<div ref={cartRef}>
			<div className="cart__overlay"></div>
			<div className="success">
				<h3 className="success--title">Thank you for your order</h3>
				<p className="success--text">You will receive an email confirmation shortly</p>
				<div className="success__items">
					<div className="success__products">
						{cartItems.length >= 1 &&
							cartItems.map((item) => (
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
											<span>x{item.quantity}</span>
										</div>
									</div>
								</div>
							))}
					</div>
					<div className="success__total">
						<span className='success__total-text'>Grand Total</span>
						<h6 className='success__total-number'>$5,446</h6>
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
