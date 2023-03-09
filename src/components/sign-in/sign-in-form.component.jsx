import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../contexts/user.context';

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
    const { setCurrentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
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
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
        } catch (e) {
            const message = e.code.split('/')[1].split('-').join(' ');
            alert(message[0].toUpperCase() + message.substring(1));
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
                        <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                    </div>
                </form>
            </div>
        </>
    );
};
