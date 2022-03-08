import PageHeaders from '../../components/PageHeaders';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import Categories from '../../components/Categories';
import AudioGear from '../../components/Home/AudioGear';

const data = [
	{
		overline: 'New Product',
		title: 'XX99 Mark II Headphones',
		content: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
		desktopImage: '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
		alt: 'Headphones',
		route: 'XX99-Mark-II-Headphones',
	},
	{
		title: 'XX99 Mark I Headphones',
		content: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
		desktopImage: '/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
		alt: 'Headphones',
		route: 'XX99-Mark-I-Headphones',
	},
	{
		title: 'XX59 Headphones',
		content: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
		desktopImage: '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
		tabletImage: '/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
		mobileImage: '/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
		alt: 'Headphones',
		route: 'XX59-Headphones',
	},
];

const Headphones = () => {
	return (
		<div className="headphones">
			<PageHeaders header="Headphones" />
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
								<Link href={'/Headphones/' + card.route}>
									<Button children="See Product" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
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

export default Headphones;
