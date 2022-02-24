import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { signInWithPopup } from 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyCKyYcFWhnXAoVS6iiiYoDjBrtLrwqwM_A",
	authDomain: "e-store-727a2.firebaseapp.com",
	projectId: "e-store-727a2",
	storageBucket: "e-store-727a2.appspot.com",
	messagingSenderId: "433796692688",
	appId: "1:433796692688:web:3694a9ee4323905ccb3cd5",
	measurementId: "G-GRM9XWRKR8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch(e) {
			console.log('error creating user', e.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
}

export const converCollectionSnapshotToMap = (collection) => {
	const transformedCollection = collection.docs.map(
		doc => {
			const { title, items } = doc.data();

			return {
				routeName: encodeURI(title.toLowerCase()),
				id: doc.id,
				title,
				items
			}
		}
	);

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promop: 'select_account' });
export const signInWithGoogle = () => {
	auth.signInWithPopup(googleProvider);
};

export default firebase;