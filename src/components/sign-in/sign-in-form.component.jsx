import { useState } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
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

    const resetFormFields = () => {
        setFormFields(initialFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (e) {
            const message = e.code.split('/')[1].split('-').join(' ');
            alert(message[0].toUpperCase() + message.substring(1));
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <>
            <div className="sign-up-container">
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput label="sign-in-email"
                        required
                        type="email"
                        id="sign-in-email"
                        onChange={handleChange}
                        name="email"
                        value={email}/>

                    <FormInput label="sign-in-password"
                        required
                        type="password"
                        id="sign-in-password"
                        onChange={handleChange}
                        name="password"
                        value={password}/>

                    <div className="buttons-container">
                        <Button buttonType="base">Sign In</Button>
                        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
