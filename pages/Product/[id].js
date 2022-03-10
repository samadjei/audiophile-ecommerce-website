import { product } from '../../components/Data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';

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
	console.log(items.includes[0]);
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
						<div>
							<span className="details__decrement">-</span>
							<span className="details__number">1</span>
							<span className="details__increment">+</span>
						</div>
						<div>
							<Button children="Add to cart" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
						</div>
					</div>
				</div>
			</div>
			<div className="info">
				<div className="info__content">
					<h2>Features</h2>
					<p>{items.features}</p>
				</div>
				<div>
					<h2>In the box</h2>
					{items.includes.map((list, index) => {
						<div key={index}>
							<span>{list.quantity}</span>;
						</div>;
					})}
					<ul>
						<li>{/* <span>{items.includes}</span> */}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
