import { useState } from 'react';
import { createUserDocument } from '../../utils/firebase/firebase.utils';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const initialFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const SignUp = () => {
    const [formFields, setFormFields] = useState(initialFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input required type="text" id="displayName" onChange={handleChange} name="displayName"
                    value={displayName}/>

                <label htmlFor="email">Email</label>
                <input required type="email" id="email" onChange={handleChange} name="email" value={email}/>

                <label htmlFor="password">Password</label>
                <input required type="password" id="password" onChange={handleChange} name="password" value={password}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input required
                    type="password"
                    id="confirmPassword"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};
