import React, { useRef } from 'react';
import Image from 'next/image';
import { useStateContext } from '../../context/StateContext';

const Summary = () => {
	const { totalPrice, totalQuantities, cartItems, toggleCartItemQuantity, onRemove, grandTotal, VAT, Shipping } = useStateContext();
	let summaryTotal = grandTotal;

	summaryTotal = parseFloat(totalPrice + VAT + Shipping).toLocaleString();

	return (
		<div>
			<div className="summary__products">
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
									<span className='cart__summary-quantity'>x{item.quantity}</span>
								</div>
							</div>
						</div>
					))}
			</div>
			<div className="summary__texts">
				<div className="summary__text">
					<span className="cart__total--text">Total</span>
					<span className="cart__total--price">${totalPrice.toLocaleString()}</span>
				</div>
				<div className="summary__text">
					<span className="cart__total--text">Shipping</span>
					<span className="cart__total--price">${Shipping.toLocaleString()}</span>
				</div>
				<div className="summary__text">
					<span className="cart__total--text">Vat (included)</span>
					<span className="cart__total--price">${VAT.toLocaleString()}</span>
				</div>
			</div>
			<div className="summary__text summary__grand-total">
				<span className="cart__total--text">Grand Total</span>
				<span className="cart__total--price summary--orange">${summaryTotal}</span>
			</div>
		</div>
	);
};

export default Summary;
