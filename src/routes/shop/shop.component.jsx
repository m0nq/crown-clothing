import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        })();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

