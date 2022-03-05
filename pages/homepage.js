import React from 'react';
import Categories from '../components/Categories';
import AudioGear from '../components/Home/AudioGear';
import Hero from '../components/Home/Hero';
import SelectProduct from '../components/Home/SelectProduct';

const Homepage = () => {
	return (
		<main>
			<Hero />
			<div className="container">
				<Categories />
			</div>
			<SelectProduct />
			<AudioGear />
		</main>
	);
};

export default Homepage;
