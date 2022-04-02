// ! REMOVE THIS import { useCart } from 'react-use-cart';
import Image from 'next/image';
import Button from '../../components/Button';

const Cart = () => {
	return (
		<div className="cart">
			<div className="cart__card">
				<div className="cart__card-top">
					<h3>Cart</h3>
					<span>(3)</span>
					<p>Remove all</p>
				</div>
				<div className="cart__main">
					<div className="cart__items">
						<Image src={items.image.mobile} alt={items.name} width={540} height={560} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
