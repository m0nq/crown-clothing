// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { writeBatch } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    });
    await batch.commit();
    console.log('Completed batch adding tx');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
    //     .reduce((accumulator, docSnapshot) => {
    //     const { title, items } = docSnapshot.data();
    //     accumulator[title.toLowerCase()] = items;
    //     return accumulator;
    // }, {});
};

export const createUserDocument = async (userAuth, options = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...options
            });
        } catch (e) {
            console.error('Error creating user', e.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChanged$ = callback => onAuthStateChanged(auth, callback);
