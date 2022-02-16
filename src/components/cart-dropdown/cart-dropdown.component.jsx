import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//import CustomButtom from '../custom-button/custom-button.component'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, ButtonContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {

	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return(
	<CartDropdownContainer>
		<CartItemsContainer>
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
				:
				<EmptyMessageContainer>
					Your cart is empty
				</EmptyMessageContainer>
			}
		</CartItemsContainer>

		<ButtonContainer onClick={()=>{navigate('/checkout'); dispatch(toggleCartHidden())}}>
			GO TO CHECKOUT
		</ButtonContainer>
	</CartDropdownContainer>
)};

export default CartDropdown;