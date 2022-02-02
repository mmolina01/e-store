import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CustomButtom from '../custom-button/custom-button.component'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, dispatch}) => {

	return(
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
				:
				<span className="empty-message">
					Your cart is empty
				</span>
			}
		</div>

		<Link to={'/checkout'}>
			<CustomButtom onClick={()=>dispatch(toggleCartHidden())}>
				GO TO CHECKOUT
			</CustomButtom>
		</Link>
	</div>
)};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);