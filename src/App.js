import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import './categories.styles.scss';
import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import { SignIn } from './routes/sign-in/signin.component';

const Shop = () => <h1>The shop...</h1>;

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
            </Route>
        </Routes>
    );
};

export default App;
