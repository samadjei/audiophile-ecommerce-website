import { products } from '../../components/Data';

const ProductCart = () => {
	return (
		<div className="details__flex">
			<div>
				<Image src={items.image.mobile} alt={items.name} width={540} height={560} />
			</div>
			<div className="details__content">
				<h2>{items.name}</h2>
				<p className="details--description">{items.description}</p>
				<h6 className="details--price">${items.price}</h6>
				<div className="details__cart">
					<div className="details__add">
						<span className="details__decrement" onClick={decrementCount}>
							-
						</span>
						<span className="details__number">{count}</span>
						<span className="details__increment" onClick={incrementCount}>
							+
						</span>
					</div>
					<div>
						<Button onClick={() => addItem(items)} children="Add to cart" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCart;
