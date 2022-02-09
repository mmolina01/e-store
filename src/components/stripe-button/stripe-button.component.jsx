import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
	
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KRIEBJO9TDFqOXUDIiw2gTccYdFrizvMXhtxl7asGVi4PA26AuvK5X3n3AeHTh6e1EA03mVQh8dMIMXnUgNnjjr00iobbWVIj';
	
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="e-store"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is: $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeCheckoutButton;