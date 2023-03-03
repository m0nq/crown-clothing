import { SignInForm } from '../../components/sign-in/sign-in-form.component';
import { SignUpForm } from '../../components/sign-up/sign-up-form.component';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocument } from '../../utils/firebase/firebase.utils';

export const Authentication = () => {
    return (
        <>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm/>
        </>
    );
};
