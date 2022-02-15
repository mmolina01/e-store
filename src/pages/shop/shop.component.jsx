import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


const ShopPage = ({fetchCollectionsStart } ) => {

	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<Routes>
			<Route exact path='/' element={<CollectionsOverviewContainer />} />
			<Route path='/:collectionId' element={<CollectionPageContainer />} />
		</Routes>
	)
}

const mapDispatchToProps = dispatch =>({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);