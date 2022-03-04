import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
	return (
		<div className="menu">
			<div className="menu__inner">
				<div className="menu__card">
					<div className="menu__image">
						<Image src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Picture of the author" width={103} height={104} />
					</div>
					<h3 className="menu--title">Headphones</h3>
					<Link href="/Headphones">
						<a className="menu--shop">Shop</a>
					</Link>
				</div>
				<div className="menu__card">
					<div className="menu__image">
						<Image src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Picture of the author" width={103} height={104} />
					</div>
					<h3 className="menu--title">Speakers</h3>
					<Link href="/Headphones">
						<a className="menu--shop">Shop</a>
					</Link>
				</div>
				<div className="menu__card">
					<div className="menu__image">
						<Image src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Picture of the author" width={103} height={104} />
					</div>
					<h3 className="menu--title">Earphones </h3>
					<Link href="/Headphones">
						<a className="menu--shop">Shop</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Categories;
