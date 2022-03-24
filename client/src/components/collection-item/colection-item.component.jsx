import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {CollectionItemContainer,
	CollectionFooterContainer,
	CollectionFooterNameContainer,
	CollectionFooterPriceContainer,
	CollectionImageContainer,
	AddButtonContainer
} from './collection-item.style'; //TODO add button container

const CollectionItem = ({item, addItem}) => {

	const {name, price, imageUrl} = item;

	return (
		<CollectionItemContainer>
			<CollectionImageContainer className="image" imageUrl={imageUrl}
			/>

			<CollectionFooterContainer>
				<CollectionFooterNameContainer>
					{name}
				</CollectionFooterNameContainer>

				<CollectionFooterPriceContainer>
					{price}$
				</CollectionFooterPriceContainer>
			</CollectionFooterContainer>

			<AddButtonContainer className='custom-button-styles' onClick={()=> addItem(item)} inverted>
				ADD TO CART
			</AddButtonContainer>
		</CollectionItemContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);