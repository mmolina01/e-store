import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CollectionPage from './pages/collection/collection.component';

import { checkUserSession } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

const App = ({ currentUser, checkUserSession }) => {

	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div >
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />}>
					<Route path='/shop/:collectionId' element={<CollectionPage />} />
				</Route>
				<Route path='/signin' element={currentUser ? <Navigate replace to="/" /> : <SignInAndSignUp />} />
				<Route path='/checkout' element={<CheckoutPage />} />
			</Routes>
		</div>
	);
}

const mapDispactchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispactchToProps)(App);
