import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import { useStateContext } from '../../context/StateContext';

const Product = ({ image, name, desc, newProduct, price, cart }) => {
	const { increaseQty, decreaseQty, qty } = useStateContext();
	return (
		<>
			<div>
				<Image className='details__image' src={image} alt={name} width={540} height={560} />
			</div>
			<div className="details__content">
				{newProduct ? <span className='overline'>New Product</span> : ''}
				<h2 className='details--name'>{name}</h2>
				<p className="details--description">{desc}</p>
				<h6 className="details--price">${price}</h6>
				<div className="details__cart">
					<div className="details__add">
						<span onClick={decreaseQty} className="details__decrement">
							-
						</span>
						<span className="details__number">{qty}</span>
						<span onClick={increaseQty} className="details__increment">
							+
						</span>
					</div>
					<div>
						<Button onClick={() => cart()} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
							Add to cart
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

Product.displayName = 'Product';

export default Product;
