import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

import { createUserDocument } from '../utils/firebase/firebase.utils';
import { onAuthStateChanged$ } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }

};

const INITIAL_STATE = {
    currentUser: null
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE, undefined);
    console.log(currentUser);
    const setCurrentUser = user => dispatch({ type: 'USER_ACTION_TYPES.SET_CURRENT_USER', payload: user });
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        return onAuthStateChanged$(async (user) => {
            if (user) {
                await createUserDocument(user);
            }
            setCurrentUser(user);
        });
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
