import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Catalog from '../containers/e-commerce/catalog';
import Layout from '../containers/_layout';
import Login from './Login';
import AppliedRoute from "../components/AppliedRoute";





const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <AppliedRoute path='/' exact component={wrappedRoutes}/>
                <AppliedRoute path='/login' component={Login}/>
            </Switch>
        </main>
    </MainWrapper>
);


const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className='container__wrap'>
            <Route path='/' component={BadTest}/>
            <Route path='/login' component={LoginPage}/>

        </div>
    </div>
);

const BadTest = () => (
    <Switch>
        <Route path='/homepage' component={Catalog}/>

    </Switch>
);

const LoginPage = () => (
    <Switch>
        <Route path='/login' component={Login} />
    </Switch>
);



export default Router;
