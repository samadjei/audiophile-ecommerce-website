import React from 'react';
import Image from 'next/image';

const AudioGear = () => {
	return (
		<section className="gear">
			<div className="gear__content">
				<h2>
					Bringing you the <span className='gear--span'>best</span> audio gear
				</h2>
				<p className='gear--text'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
			</div>
			<div className='gear__image-desktop'>
				<Image src="/assets/shared/desktop/image-best-gear.jpg" alt="Person listening to music" width={540} height={588} />
			</div>
			<div className='gear__image-tablet'>
				<Image src="/assets/shared/tablet/image-best-gear.jpg" alt="Person listening to music" width={689} height={300} />
			</div>
			<div className='gear__image-mobile'>
				<Image src="/assets/shared/mobile/image-best-gear.jpg" alt="Person listening to music" width={327} height={300} />
			</div>
		</section>
	);
};

export default AudioGear;
