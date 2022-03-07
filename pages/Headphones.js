import PageHeaders from '../components/PageHeaders';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import Categories from '../components/Categories';
import AudioGear from '../components/Home/AudioGear';

const Headphones = () => {
	return (
		<div className="headphones">
			<PageHeaders header="Headphones" />
			<div className="container">
				<div className="headphones__grid">
					<Image src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" alt="Audiophile Logo" width={540} height={560} />
					<div className="headphones__content">
						<span className="overline">New Product</span>
						<h2 className="page--title">XX99 Mark II Headphones</h2>
						<p className="page--text">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
						<div>
							<Link href="/Headphones">
								<Button children="See Product" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
							</Link>
						</div>
					</div>
				</div>
				<div className="headphones__grid">
					<div className="headphones__content">
						<h2 className="page--title">XX99 Mark I Headphones</h2>
						<p className="page--text">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
						<div>
							<Link href="/Headphones">
								<Button children="See Product" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
							</Link>
						</div>
					</div>
					<Image src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" alt="Audiophile Logo" width={540} height={560} />
				</div>
				<div className="headphones__grid">
					<Image src="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg" alt="Audiophile Logo" width={540} height={560} />
					<div className="headphones__content">
						<h2 className="page--title">XX59 Headphones</h2>
						<p className="page--text">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
						<div>
							<Link href="/Headphones">
								<Button children="See Product" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
							</Link>
						</div>
					</div>
				</div>
				<Categories />
				<AudioGear />
			</div>
		</div>
	);
};

export default Headphones;
