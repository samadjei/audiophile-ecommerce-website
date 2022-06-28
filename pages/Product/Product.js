import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import { useStateContext } from '../../context/StateContext';

const Product = (props, product) => {
	const { decreaseQty, increaseQty, qty, onAdd } = useStateContext();
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
						<span className="details__decrement" onClick={decreaseQty}>
							-
						</span>
						<span className="details__number">{qty}</span>
						<span className="details__increment" onClick={increaseQty}>
							+
						</span>
					</div>
					<div>
						<Button onClick={() => onAdd(product, qty)} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">Add to cart</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
