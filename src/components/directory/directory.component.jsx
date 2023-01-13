import { CategoryItem } from '../category-item/category-item.component';
import './directory.styles.scss';

export const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map(category => {
                return (
                    <CategoryItem category={category} key={category.id}/>
                );
            })}
        </div>
    );
};
