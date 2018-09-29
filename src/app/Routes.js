import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AppliedRoute from "../components/AppliedRoute";
import Login from './Login';
import Catalog from '../containers/e-commerce/catalog';
import Verify from './verify';
import Signup from './Signup';

const PrivateRoute = ({ component: Component, props, ...rest }) => {
// props refers to childProps which are coming from App.js. 
// This should be updated swiftly when session is changed.
  if(props.isAuthenticated){
    return <Component isAuthenticated={props.isAuthenticated}/>
  } else {
    return <Redirect to='/login'/>
  }
}

export default ({ childProps }) =>
  <Switch>
    <PrivateRoute path="/" exact component={Catalog} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/verify"  component={Verify} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
  </Switch>;