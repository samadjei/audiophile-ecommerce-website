import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { product } from './Data';

const Others = ({ others }) => {
	return (
		<div className="others">
			<h3 className="others--title">You May Like</h3>
			<div className="others__inner">
				<div className='others__items'>
					<Image src={others.others[0].image.desktop} alt="Photo" width={223} height={318} />
					<h4>{others.others[0].name}</h4>
					<Link href={others.others[0].slug}>
					<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">See Product</Button>
					</Link>
				</div>
				<div className='others__items'>
					<Image src={others.others[1].image.desktop} alt="Photo" width={223} height={318} />
					<h4 className='other--name'>{others.others[1].name}</h4>
					<Link href={others.others[1].slug}>
					<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">See Product</Button>
					</Link>
				</div>
				<div className='others__items'>
					<Image src={others.others[2].image.desktop} alt="Photo" width={223} height={318} />
					<h4>{others.others[2].name}</h4>
					<Link href={others.others[2].slug}>
					<Button className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">See Product</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Others;
