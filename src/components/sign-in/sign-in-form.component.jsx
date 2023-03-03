import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { createUserDocument } from '../../utils/firebase/firebase.utils';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { Button } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';

import './sign-in-form.styles.scss';

const initialFormFields = {
    email: '',
    password: ''
};

export const SignInForm = () => {
    const [formFields, setFormFields] = useState(initialFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    };

    const resetFormFields = () => {
        setFormFields(initialFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
        } catch (e) {
        }
    };

    return (
        <>
            <div className="sign-up-container">
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput label="email"
                        required
                        type="email"
                        id="email"
                        onChange={handleChange}
                        name="email"
                        value={email}/>

                    <FormInput label="password"
                        required
                        type="password"
                        id="password"
                        onChange={handleChange}
                        name="password"
                        value={password}/>

                    <div className="buttons-container">
                        <Button buttonType="submit">Sign In</Button>
                        <Button buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
