import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/Button.js';
import { useStateContext } from '../../context/StateContext';

const Product = ({ imageDesktop, imageTablet, imageMobile, name, desc, newProduct, price, cart }) => {
	const { increaseQty, decreaseQty, qty } = useStateContext();
	const result = price ? price.toLocaleString() : price;

	return (
		<>
			<div>
				<div className="details__image-desktop">
					<Image className="details__image " src={imageDesktop} alt={name} width={540} height={560} />
				</div>
				<div className="details__image-tablet">
					<Image className="details__image details__image-tablet" src={imageTablet} alt={name} width={281} height={480} />
				</div>
			</div>
			<div className="details__content">
				{newProduct ? <span className="overline">New Product</span> : ''}
				<h2 className="details--name">{name}</h2>
				<p className="details--description">{desc}</p>
				<h6 className="details--price">${result}</h6>
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
