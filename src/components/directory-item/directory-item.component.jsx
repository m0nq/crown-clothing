import { useNavigate } from 'react-router-dom';
import { Body } from './directory-item.styles';
import { BackgroundImage } from './directory-item.styles';
import { DirectoryItemContainer } from './directory-item.styles';

export const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

