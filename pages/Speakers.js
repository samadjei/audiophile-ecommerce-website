import PageHeaders from '../components/PageHeaders';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button.js';
import Categories from '../components/Categories';
import AudioGear from '../components/Home/AudioGear';

const data = [
	{
		overline: 'New Product',
		title: 'ZX9 speaker',
		content: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
		desktopImage: '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
		alt: 'ZX9 speaker',
		route: 'zx9-speaker',
	},
	{
		title: 'ZX7 speaker',
		content: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
		desktopImage: '/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
		alt: 'ZX7 speaker',
		route: 'zx7-speaker',
	},
];

const Speakers = () => {
	return (
		<div className="speakers">
			<PageHeaders header="Speakers" />
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

export default Speakers;
