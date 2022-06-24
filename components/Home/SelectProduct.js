import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';

const SelectProduct = () => {
	return (
		<section className="select">
			<div className="select__speaker">
				<div className="select__speaker-desktop">
					<Image  src="/assets/home/desktop/image-speaker-zx9.png" alt="Picture of the author" width={410} height={493} />
				</div>
				<div className="select__speaker-tablet">
					<Image src="/assets/home/tablet/image-speaker-zx9.png" alt="Picture of the author" width={200} height={240} />
				</div>
			
				<div className="select__speaker-content">
					<h2 className="select__speaker-header">ZX9 speaker</h2>
					<p className="select__speaker-text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
					<div className="select__button">
						<Link href="/Product/zx9-speaker">
							<Button className="btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">See Product</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="select__speakers">
				<h3>ZX7 speaker</h3>
				<div className="select__button">
					<Link href="/Product/zx7-speaker">
						<Button  className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">See Product</Button>
					</Link>
				</div>
			</div>
			<div className="select__earphones">
				<div className="select__earphones-bg"></div>
				<div className="select__earphones-content">
					<h3>YX1 earphones</h3>
					<div className="select__button">
						<Link href="/Product/yx1-earphones">
						<Button  className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">See Product</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectProduct;
