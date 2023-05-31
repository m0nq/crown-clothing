import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { setCategoriesMap } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            dispatch(setCategoriesMap(categoryMap));
        })();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

