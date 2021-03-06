import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Produc</span>
			</div>

			<div className="header-block">
				<span>Descripton</span>
			</div>

			<div className="header-block">
				<span>Quantity</span>
			</div>

			<div className="header-block">
				<span>Price</span>
			</div>

			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>

		{
			cartItems.map(cartItem => (
				<CheckoutItem cartItem={cartItem} key={cartItem.id} />
			))
		}

		<div className="total">
			<span>
				{total}
			</span>
		</div>

		<StripeCheckoutButton price={total}/>

		<div>
			test credit card: 4242 4242 4242 4242 / date: any later than today / CVC: 123
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);