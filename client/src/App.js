import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CollectionPage = lazy(() => import('./pages/collection/collection.component'));

const App = () => {

	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<div >
			<GlobalStyle />
			<Header />
			<ErrorBoundary>
				<Suspense fallback={<Spinner/>}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/shop' element={<ShopPage />}>
							<Route path='/shop/:collectionId' element={<CollectionPage />} />
						</Route>
						<Route path='/signin' element={currentUser ? <Navigate replace to="/" /> : <SignInAndSignUp />} />
						<Route path='/checkout' element={<CheckoutPage />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;