import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

export const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">SHOP</Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> :
                            <Link to="/auth" className="nav-link">SIGN IN</Link>
                    }
                </div>
            </div>
            <Outlet/>
        </>
    );
};
