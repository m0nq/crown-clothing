// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCRjAARPOSUi4Oa79gW1W9DIAodi-cWOLE',
    authDomain: 'crown-clothing-db-332a3.firebaseapp.com',
    projectId: 'crown-clothing-db-332a3',
    storageBucket: 'crown-clothing-db-332a3.appspot.com',
    messagingSenderId: '335888864475',
    appId: '1:335888864475:web:80fc19439a01e393ae28fe'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocument = async userAuth => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (e) {
            console.error('Error creating user', e.message);
        }
    }

    return userDocRef;
};
