import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import CollectionItem from '../../components/collection-item/colection-item.component';

import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection.styles";

let params = {collectionId: 'hats'}; //TODO
const CollectionPage = ({collection}) => {
	params = useParams(); //TODO
	
	const {title, items} = collection;

	return(
		<CollectionPageContainer>
			<TitleContainer>
				{title}
			</TitleContainer>

			<ItemsContainer>
				{
					items.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</ItemsContainer>
		</CollectionPageContainer>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);