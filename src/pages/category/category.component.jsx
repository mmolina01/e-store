import React from "react";
import { useParams } from "react-router-dom";

import CollectionItem from '../../components/collection-item/colection-item.component';

import './category.styles.scss';

const Category = () => {
	const params = useParams();
	console.log(params)

	return(
		<div className="category">
			<h2>CATEGORY PAGE</h2>
		</div>
	)
}

export default Category;