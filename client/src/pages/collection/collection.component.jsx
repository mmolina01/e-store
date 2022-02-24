import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from '../../components/collection-item/colection-item.component';

import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection.styles";

const CollectionPage = () => {

	const { collectionId } = useParams(); 
	const collection = useSelector(selectCollection(collectionId));

	const {title, items} = collection;

	return(
		<CollectionPageContainer>
			<TitleContainer>
				{title}
			</TitleContainer>

			<ItemsContainer>
				{
					items ? items.map(item => <CollectionItem key={item.id} item={item} />) : <div></div>
				}
			</ItemsContainer>
		</CollectionPageContainer>
	)
}

export default CollectionPage;