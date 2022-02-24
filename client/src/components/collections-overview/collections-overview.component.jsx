import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({collections}) => {

	return (
		<CollectionOverviewContainer>
			{
				collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview key={id} {...otherCollectionProps}/>
				))
			}
		</CollectionOverviewContainer>
	)
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);