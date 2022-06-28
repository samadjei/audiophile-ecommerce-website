import { products } from '../../components/Data';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async () => {
	return {
		props: {
			productLists: products,
		},
	};
};

export default ({ productLists }) => (
	<>
		<Link href="/">
			<a>Go back</a>
		</Link>
		{productLists.map((products) => (
			<div key={productLists.id}>
				<h2>{products.name}</h2>
				<div>
					<Image src={products.image.mobile} alt={products.name} width={540} height={560} />
				</div>
			</div>
		))}
	</>
);

Button.displayName = 'Button';

