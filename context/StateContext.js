import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState();
	const [totalQuantities, setTotalQuantities] = useState();
	const [quantity, setQuantity] = useState(1);

	const onAdd = (product, quantity) => {
		// check if the product is already in the cart
		const checkProductInCart = cartItems.find((item) => item._id === product._id);
		// update the states
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
		if (checkProductInCart) {
			// update the items in the cart - this function is to stop the cart item to duplicate the same products, rather, update the quanitty and total
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});

			setCartItems(updatedCartItems);
		} else {
			// if we dont have the items in the cart already 
      product.quantity = quantity;
      // spread all the existing cart items  and spread the new object with the new products 
			setCartItems([...cartItems, { ...product }]);
		}
		toast.success(`${qty} ${product.name} added to the cart`);
	};

	const increaseQty = () => {
		setQuantity((prevQty) => prevQty + 1);
	};

	const decreaseQty = () => {
		setQuantity((prevQty) => {
			// quantity value cannot be lower than 1
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};

	return (
		<Context.Provider
			value={{
				showCart,
				cartItems,
				totalPrice,
				totalQuantities,
				quantity,
				increaseQty,
        decreaseQty,
        onAdd
			}}
		>
			{children}
		</Context.Provider>
	);
};

// allows us to use our state like a hook
export const useStateContext = () => useContext(Context);
