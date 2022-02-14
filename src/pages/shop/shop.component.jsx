import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionOverview from "../../components/collections-overview/collectios-overview.component";
import CollectionPage from "../collection/collection.component";

import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

	state = {
		loading: true
	};
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const {updateCollections} = this.props;

		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = converCollectionSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false})
		});
	}

	render() {
		const {loading} = this.state;
		return (
			<Routes>
				<Route exact path='/' element={<CollectionOverviewWithSpinner isLoading={loading}/>} />
				<Route path='/:collectionId' element={<CollectionPageWithSpinner isLoading={loading} />} />
			</Routes>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);