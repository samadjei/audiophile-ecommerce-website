import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__left">
					<div className='footer__top'>
						<div className="footer__logo">
							<Image src="/assets/shared/desktop/logo.svg" alt="Audiophile Logo" width={143} height={25} />
						</div>
						<ul className="footer__links">
							<li>
								<Link href="/">
									<a className="footer--items">Home</a>
								</Link>
							</li>
							<li>
								<Link href="/Headphones">
									<a className="footer--items">Headphones</a>
								</Link>
							</li>
							<li>
								<Link href="/Speakers">
									<a className="footer--items">Speakers</a>
								</Link>
							</li>
							<li>
								<Link href="/Earphones">
									<a className="footer--items">Earphones</a>
								</Link>
							</li>
						</ul>
					</div>
					<p className="footer--text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
					<p className="footer--copyright">Copyright 2021. All Rights Reserved</p>
				</div>
				<div className="footer__right">
					<div className="footer__socials">
						<FaFacebookSquare className="footer__socials--items" />
						<FaTwitter className="footer__socials--items" />
						<FaInstagram className="footer__socials--items" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
