import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collectios-overview.component";
import Category from "../category/category.component";

const ShopPage = () => {
	return (
		<Routes>
			<Route exact path='/' element={<CollectionOverview />} />
			<Route path='/:categoryId' element={<Category />} />
		</Routes>
	)
}

export default ShopPage;