import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import CollectionItem from '../../components/collection-item/colection-item.component';

import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

let params = {collectionId: 'hats'}; //TODO
const CollectionPage = ({collection}) => {
	params = useParams(); //TODO
	
	const {title, items} = collection;

	return(
		<div className="collection-page">
			<h2 className="title">{title}</h2>

			<div className="items">
				{
					items.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);