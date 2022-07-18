import Link from 'next/link';
import Summary from '../components/Checkout/Summary';
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
				<div className="checkout__flex">
					<div className="checkout">
						<h2>Checkout</h2>
						<CheckoutForm />
					</div>
					<div className="summary">
						<h6>Summary</h6>
						<Summary />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
