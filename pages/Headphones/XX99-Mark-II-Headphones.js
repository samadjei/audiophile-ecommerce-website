import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button';

const XX99Headphones = () => {
	return (
		<div className="details">
			<div className="container">
				<Link href="/Headphones">
					<a className="details--back">Go back</a>
				</Link>
			</div>
			<div>
				if
				<div className="page__image-desktop">
					{/* <Image src="" alt="" width={540} height={560} /> */}
				</div>
				{/* <div className="page__image-tablet">
					<Image src={card.tabletImage} alt={card.alt} width={689} height={352} />
				</div>
				<div className="page__image-mobile">
					<Image src={card.mobileImage} alt={card.alt} width={327} height={352} />
				</div> */}
			</div>
		</div>
	);
};

export default XX99Headphones;
