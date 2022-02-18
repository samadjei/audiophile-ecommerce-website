import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar ">
			<div className="navbar__inner container">
				<div className="navbar__logo">
					<Link href="/">
						<a>
							<Image src="/assets/shared/desktop/logo.svg" alt="Audiophile logo" width={143} height={26} />
						</a>
					</Link>
				</div>
				<ul className="navbar__links">
					<li>
						<Link href="/">
							<a className="navbar__links--items">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/About">
							<a className="navbar__links--items">Headphones</a>
						</Link>
					</li>
					<li>
						<Link href="/Subscribe">
							<a className="navbar__links--items">Speakers</a>
						</Link>
					</li>
				</ul>
				<div className="navbar__cart">
					<Image src="/assets/shared/desktop/icon-cart.svg" alt="Coffee Roaster Logo" width={23} height={20} />
				</div>
			</div>
			<hr className="hr-line" />
		</nav>
	);
};

export default Navbar;
