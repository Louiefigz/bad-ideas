import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Catalog from '../containers/e-commerce/catalog';
import Layout from '../containers/_layout';




const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route path='/' component={wrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);


const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className='container__wrap'>
            <Route path='/' component={BadTest}/>
        </div>
    </div>
);

const BadTest = () => (
    <Switch>
        <Route path='/' component={Catalog}/>
    </Switch>
);


export default Router;
