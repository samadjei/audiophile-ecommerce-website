import '../scss/main.scss';
import Layout from '../components/layout';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
	return (
		// Wrapping the StateContext around the component makes it avaialable to every component
		<StateContext>
			<Layout>
				<Toaster />
				{/* children of the layout component */}
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}

export default MyApp;
