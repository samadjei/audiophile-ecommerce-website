import '../scss/main.scss';
import Layout from '../components/layout';
// import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
	return (
		// Wrapping the StateContext around the component makes it avaialable to every component
		//<CartProvider>
			<Layout>
				{/* children of the layout component */}
				<Component {...pageProps} />
			</Layout>
		//</CartProvider>
	);
}

export default MyApp;
