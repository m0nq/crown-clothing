import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './navigation.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

export const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">SHOP</Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
};
