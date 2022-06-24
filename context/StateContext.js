import React, { createContext, useContext, useState, useEffect } from 'react';
// Popup notification for when an item has been added to the cart
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
	// State to show the cart or not
	const [showCart, setShowCart] = useState(false);
	// State to manage what items we have in our cart
	const [cartItems, setCartItems] = useState([]);
	// Keep track of the total price
	const [totalPrice, setTotalPrice] = useState(0);
	// Keep track of the total quantities of items
	const [totalQuantities, setTotalQuantities] = useState(0);
	// Change the quantity for each individual item
	const [qty, setQty] = useState(1);

	// Add to cart funcitonality
	const onAdd = (product, quantity) => {
		// Check if the product is already in the cart
		const checkProductInCart = cartItems.find((item) => item._id === product._id);
		// If the product is in the cartItems, then increase the quantity and don't add another instance of the product
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity);
		if (checkProductInCart) {
			// Update the items in the cart
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						// update the quantity of the item when the add to czrt function is clicked
						quantity: cartProduct.quantity + quantity,
					};
			});

			setCartItems(updatedCartItems);
		}
	};

	// Creating the dynamic quantity update functions
	function decreaseQty() {
		// setQty((prevQty) => prevQty - 1);
		// if (prevQty - 1 < 1) return 1;

		// // we cant go lower than quantity of 1
		// return prevQty - 1;
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	}

	function increaseQty() {
		setQty((prevQty) => prevQty + 1);
	}

	return <Context.Provider value={{ showCart, cartItems, totalPrice, totalQuantities, qty, increaseQty, decreaseQty, onAdd }}>{children}</Context.Provider>;
};

//  Allow us to use the state like a hook
export const useStateContext = () => useContext(Context);
