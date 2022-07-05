import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { product } from '../components/Data';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	const onAdd = (product, quantity) => {
		// check if the product is already in the cart
		const checkProductInCart = cartItems.find((item) => item.id === product.id);
		// update the states
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
		if (checkProductInCart) {
			// update the items in the cart - this function is to stop the cart item to duplicate the same products, rather, update the quanitty and total
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct.id === product.id)
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

	// product we want to update
	let foundProduct;
	// index of the product we want to update
	let index;

	// Quanity update function to add more quantities at any one time
	const toggleCartItemQuantity = (id, value) => {
		// go through all the cart items and find an individual cart item
		foundProduct = cartItems.find((item) => item.id === product.id);
		// once we've found the item we'll find the index of the item
		index = cartItems.findIndex((product) => product.id === id);
		// update the cart item without mutating the state directly 
		const newCartItems = cartItems.filter((item) => item.id !== id)

		// know whether we are incrementing or decrementing the quantities
		if (value === 'inc') {
			// updating the current cart item where we spread the quantity and increase the quantity by 1
			setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
			// get the previous total price and update it to the new total price
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		} else if (value === 'dec') {
			if (foundProduct.quantity > 1) {
				setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
			}
		}
	};

	const increaseQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	const decreaseQty = () => {
		setQty((prevQty) => {
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
				qty,
				increaseQty,
				decreaseQty,
				onAdd,
				toggleCartItemQuantity,
			}}
		>
			{children}
		</Context.Provider>
	);
};

// allows us to use our state like a hook
export const useStateContext = () => useContext(Context);
