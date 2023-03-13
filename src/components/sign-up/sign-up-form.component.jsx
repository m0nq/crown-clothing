import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../contexts/user.context';

import { createUserDocument } from '../../utils/firebase/firebase.utils';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { Button } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

const initialFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(initialFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

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

        if (password !== confirmPassword) {
            alert('Your passwords don\'t match. Try again please');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDocument(user, { displayName });
            resetFormFields();
            console.log(user);
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cannot create user - email already in use');
            }
            console.error('Error: user creation encountered an error', e.message);
        }
    };

    return (
        <>
            <div className="sign-up-container">
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput label="displayName"
                        required
                        type="text"
                        id="displayName"
                        onChange={handleChange}
                        name="displayName"
                        value={displayName}/>

                    <FormInput label="sign-up-email"
                        required
                        type="email"
                        id="sign-up-email"
                        onChange={handleChange}
                        name="email"
                        value={email}/>

                    <FormInput label="sign-up-password"
                        required
                        type="password"
                        id="sign-up-password"
                        onChange={handleChange}
                        name="password"
                        value={password}/>

                    <FormInput label="confirm password"
                        required
                        type="password"
                        id="confirmPassword"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}/>

                    <Button buttonType="submit">Sign Up</Button>
                </form>
            </div>
        </>
    );
};
