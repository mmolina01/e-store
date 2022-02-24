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

import CustomButton from "../custom-button/custom-button.component";
import './collection-item.styles.scss';

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

			<CustomButton className='custom-button-styles' onClick={()=> addItem(item)} inverted>
				ADD TO CART
			</CustomButton>
		</CollectionItemContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);