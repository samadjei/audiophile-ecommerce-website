import { product } from '../../components/Data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import Others from '../../components/Others';
import Categories from '../../components/Categories';
import AudioGear from '../../components/Home/AudioGear';
import { useState } from 'react';

export const getStaticProps = async ({ params }) => {
	const products = product.filter((p) => p.slug === params.id);
	return {
		props: {
			items: products[0],
		},
	};
};

export const getStaticPaths = async () => {
	const paths = product.map((items) => ({
		params: { id: items.slug },
	}));
	return { paths, fallback: false };
};

const ProductDetail = ({ items }) => {
	// State
	const [count, setCount] = useState(1);
	const [cartItems, setCartItems] = useState([]);

	function decrementCount() {
		setCount((prevCount) => prevCount - 1);
		if (count === 0) {
			console.log(count);
		}
	}
	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
	}
	return (
		<div className="container">
			<div className="details">
				<Link href="/Headphones">
					<a className="details--back">Go back</a>
				</Link>
			</div>
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
							<Button children="Add to cart" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
						</div>
					</div>
				</div>
			</div>
			<div className="info">
				<div className="info__content">
					<h2 className="info--title">Features</h2>
					<p>{items.features}</p>
				</div>
				<div>
					<h2 className="info--title">In the box</h2>
					<div className="info__list">
						{items.includes.map((list, index) => {
							return (
								<div className="info__list-inner" key={index}>
									<span className="info--quantity">{list.quantity}x</span>
									<span className="info--item">{list.item}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="details__images">
				<div className="details__images-1">
					<Image src={items.gallery.first.desktop} alt="Photo" width={445} height={280} />
				</div>
				<div className="details__images-2">
					<Image src={items.gallery.second.desktop} alt="Photo" width={445} height={280} />
				</div>
				<div className="details__images-3">
					<Image src={items.gallery.third.desktop} alt="Photo" width={635} height={720} />
				</div>
			</div>
			<Others />
			<Categories />
			<div className="page__gear">
				<AudioGear />
			</div>
		</div>
	);
};

export default ProductDetail;
