import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collectios-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
	return (
		<Routes>
			<Route exact path='/' element={<CollectionOverview />} />
			<Route path='/:collectionId' element={<CollectionPage />} />
		</Routes>
	)
}

export default ShopPage;