import PageHeaders from '../components/PageHeaders';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import Categories from '../components/Categories';
import AudioGear from '../components/Home/AudioGear';

const data = [
	{
		overline: 'New Product',
		title: 'YX1 wireless earphones',
		content: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
		desktopImage: '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
		alt: 'YX1 wireless earphones',
		route: 'yx1-earphones',
	},
];

const Earphones = () => {
	return (
		<div className="earphones">
			<PageHeaders header="Earphones" />
			<div className="container">
				{data.map((card, index) => (
					<div key={index} className="page__grid">
						<div className="page__image-desktop">
							<Image src={card.desktopImage} alt={card.alt} width={540} height={560} />
						</div>
						<div className="page__image-tablet">
							<Image src={card.tabletImage} alt={card.alt} width={689} height={352} />
						</div>
						<div className="page__image-mobile">
							<Image src={card.mobileImage} alt={card.alt} width={327} height={352} />
						</div>
						<div className="page__content">
							<span className="overline">{card.overline}</span>
							<h2 className="page--title">{card.title}</h2>
							<p className="page--text">{card.content}</p>
							<div>
								<Link href={'/Product/' + card.route}>
								<Button  className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">See Product</Button>
								</Link>
							</div>
						</div>
					</div>
				))}

				<Categories />
				<div className="page__gear">
					<AudioGear />
				</div>
			</div>
		</div>
	);
};

export default Earphones;
