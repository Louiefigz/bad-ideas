import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppliedRoute from "../components/AppliedRoute";
import Login from './Login';
import Catalog from '../containers/e-commerce/catalog';
import Verify from './verify';
import Signup from './Signup';

const PrivateRoute = ({ component: Component, auth }) => (
  <Route  render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Catalog} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/verify"  component={Verify} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
  </Switch>;
