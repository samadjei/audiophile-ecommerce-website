import React from 'react';
import Link from 'next/link';

const Checkout = () => {
	return (
		<div className="container">
			<div className="details">
				<Link href="/Headphones">
					<a className="details--back">Go back</a>
				</Link>
			</div>
			<div>
				<div className="checkout">
					<h2>Checkout</h2>
          
				</div>
			</div>
		</div>
	);
};

export default Checkout;
