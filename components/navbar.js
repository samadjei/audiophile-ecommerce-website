import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container">
				<div className="logo">
					<Link href="/">
						<a>
							<Image src="/assets/shared/desktop/logo.svg" alt="Picture of the author" width={143} height={25} />
						</a>
					</Link>
				</div>
				<ul className="nav__links">
					<li className="nav__links-items">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="nav__links-items">
						<Link href="/about">
							<a>About Us</a>
						</Link>
					</li>
					<li className="nav__links-items">
						<Link href="/blog/hello-world">
							<a>Blog Post</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
