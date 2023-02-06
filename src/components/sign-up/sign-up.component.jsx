import { useState } from 'react';

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

    return (
        <>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {
            }}>
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
