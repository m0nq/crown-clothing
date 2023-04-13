import { Link } from 'react-router-dom';

import './directory-item.styles.scss';

export const DirectoryItem = ({ category: { imageUrl, title } }) => {
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
            <div className="body">
                <Link to={`/shop/${title.replace(/'/g, '').toLowerCase()}`}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Link>
            </div>
        </div>
    );
};

