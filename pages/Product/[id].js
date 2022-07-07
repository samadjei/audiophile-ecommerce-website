import { product } from '../../components/Data';
import Image from 'next/image';
import Link from 'next/link';
import Others from '../../components/Others';
import Categories from '../../components/Categories';
import AudioGear from '../../components/Home/AudioGear';
import Product from './Product';
import { useStateContext } from '../../context/StateContext';

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
	const { qty, onAdd } = useStateContext();

	const addToCart = () => {
		onAdd(items, qty);
	};
	return (
		<div className="container">
			<div className="details">
				<Link href="/Headphones">
					<a className="details--back">Go back</a>
				</Link>
			</div>
			<div className="details__flex">
				<Product cart={addToCart} newProduct={items.new} image={items.image.mobile} name={items.name} desc={items.description} price={items.price} />
			</div>
			<div className="info">
				<div className="info__content">
					<h2 className="info--title">Features</h2>
					<p className='info--desc'>{items.features}</p>
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
			<Others others={items} />
			<Categories />
			<div className="page__gear">
				<AudioGear />
			</div>
		</div>
	);
};

export default ProductDetail;
