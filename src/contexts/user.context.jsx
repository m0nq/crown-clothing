import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

import { createUserDocument } from '../utils/firebase/firebase.utils';
import { onAuthStateChanged$ } from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.util';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
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
    const setCurrentUser = user => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
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
