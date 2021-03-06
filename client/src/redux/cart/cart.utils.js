export const addItemToCart = (cartItems, cartItemToAdd) => {

	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

	if (existingCartItem) {
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
		);
	}

	return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const clearItemFromCart = (cartItems, itemToClear) => {

	return cartItems.filter(item => item.id !== itemToClear.id)
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

	if (existingCartItem && existingCartItem.quantity === 1) {
		return clearItemFromCart(cartItems, cartItemToRemove);
	}

	return cartItems.map(cartItem => 
		cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
	);
}