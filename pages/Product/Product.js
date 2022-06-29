import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';

const Product = (props) => {
	return (
		<>
			<div>
				<Image src={props.image} alt={props.name} width={540} height={560} />
			</div>
			<div className="details__content">
				<h2>{props.name}</h2>
				<p className="details--description">{props.desc}</p>
				<h6 className="details--price">${props.price}</h6>
				<div className="details__cart">
					<div className="details__add">
						<span className="details__decrement">
							-
						</span>
						<span className="details__number">Insert</span>
						<span className="details__increment">
							+
						</span>
					</div>
					<div>
						<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">Add to cart</Button>
					</div>
				</div>
			</div>
		</>
	);
};

Product.displayName = 'Product';

export default Product;