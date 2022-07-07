import React from 'react';
import Link from 'next/link';
import CheckoutForm from '../components/Checkout/CheckoutForm';

const Checkout = () => {
	return (
		<div className="checkout__grey">
			<div className="container">
				<div className="details">
					<Link href="/Headphones">
						<a className="details--back">Go back</a>
					</Link>
				</div>
				<div>
					<div className="checkout">
						<h2>Checkout</h2>
						<CheckoutForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
