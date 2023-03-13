import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

export const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    return (
        <>
            <div className="navigation">
                <Link to="/">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">SHOP</Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span> :
                            <Link to="/auth" className="nav-link">SIGN IN</Link>
                    }
                </div>
            </div>
            <Outlet/>
        </>
    );
};
