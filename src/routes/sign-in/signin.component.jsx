import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocument } from '../../utils/firebase/firebase.utils';

export const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
    };

    return (
        <>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign-In with Google</button>
        </>
    );
};
