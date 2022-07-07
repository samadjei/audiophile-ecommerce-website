import Image from 'next/image';
import Button from '../Button';
import { useStateContext } from '../../context/StateContext';

const ProductCart = () => {
	const { decreaseQty, increaseQty, qty } = useStateContext();
	console.log(items)
	return (
		<div className="details__flex">
			<div>
				<Image src={items.image.mobile} alt={items.name} width={540} height={560} />
			</div>
			<div className="details__content">
				{items.new === true ? 'New Product' : ''}
				<h2>{items.name}</h2>
				<p className="details--description">{items.description}</p>
				<h6 className="details--price">${items.price}</h6>
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
						<Button onClick={() => addItem(items)} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
							Add to cart
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCart;
