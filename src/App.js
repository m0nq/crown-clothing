import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import './categories.styles.scss';
import { Authentication } from './routes/authentication/authentication.component';
import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';

const Shop = () => <h1>The shop...</h1>;

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/auth" element={<Authentication/>}/>
            </Route>
        </Routes>
    );
};

export default App;
