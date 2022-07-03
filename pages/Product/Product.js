import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import { useStateContext } from '../../context/StateContext';

const Product = ({image, name, desc, price, cart}) => {
	const { increaseQty, decreaseQty, quantity } = useStateContext();


	return (
		<>
			<div>
				<Image src={image} alt={name} width={540} height={560} />
			</div>
			<div className="details__content">
				<h2>{name}</h2>
				<p className="details--description">{desc}</p>
				<h6 className="details--price">${price}</h6>
				<div className="details__cart">
					<div className="details__add">
						<span onClick={decreaseQty} className="details__decrement">-</span>
						<span className="details__number">{quantity}</span>
						<span onClick={increaseQty} className="details__increment">+</span>
					</div>
					<div>
						<Button onClick={()=> cart()} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
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
