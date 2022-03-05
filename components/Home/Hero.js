import Link from 'next/link';
import Button from '../Button';
const Hero = () => {
	return (
		<div className="hero">
			<div className=" hero__inner">
				<div className="hero__content ">
					<span className="hero--subhead">New product</span>
					<h1 className='hero--title'>XX99 Mark II Headphones</h1>
					<p className='hero--text'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
					<div className="hero__btn">
						<Link href="/Headphones">
							<Button children="See Product" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
