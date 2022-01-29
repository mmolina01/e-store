import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { signInWithPopup } from 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyCKyYcFWhnXAoVS6iiiYoDjBrtLrwqwM_A",
	authDomain: "e-store-727a2.firebaseapp.com",
	projectId: "e-store-727a2",
	storageBucket: "e-store-727a2.appspot.com",
	messagingSenderId: "433796692688",
	appId: "1:433796692688:web:3694a9ee4323905ccb3cd5",
	measurementId: "G-GRM9XWRKR8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promop: 'select_account' });
export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export default firebase;