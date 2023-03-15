import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserDocument } from '../utils/firebase/firebase.utils';
import { onAuthStateChanged$ } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        return onAuthStateChanged$(async user => {
            if (user) {
                await createUserDocument(user);
            }
            setCurrentUser(user);
        });
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};