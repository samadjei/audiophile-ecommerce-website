import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';

const SelectProduct = () => {
	return (
		<section className="select">
			<div className="select__speaker">
				<div className="select__speaker-image">
					<Image src="/assets/home/desktop/image-speaker-zx9.png" alt="Picture of the author" width={410} height={493} />
				</div>
				<div className="select__speaker-content">
					<h2 className="select__speaker-header">ZX9 speaker</h2>
					<p className="select__speaker-text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
					<div className="select__button">
						<Link href="/Speakers">
							<Button children="See Product" className="btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop" />
						</Link>
					</div>
				</div>
			</div>
			<div className="select__speakers">
				<h3>ZX7 speaker</h3>
				<div className="select__button">
					<Link href="/Speakers">
						<Button children="See Product" className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop" />
					</Link>
				</div>
			</div>
			<div className="select__earphones">
				<div className="select__earphones-bg"></div>
				<div className="select__earphones-content">
					<h3>YX1 earphones</h3>
					<div className="select__button">
						<Link href="/Earphones">
							<Button children="See Product" className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectProduct;
