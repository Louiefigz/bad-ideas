import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import  Routes  from './Routes';
import { connect } from 'react-redux';
import { loginUser, logOut, currentUser } from '../actions/Auth';

import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import './index.css';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
  
  handleLogout() {
    // this.userHasAuthenticated(false);
    this.props.logOut(this.props.history, '/login');
  }
  componentDidMount(){
    //so soemthing here
    this.props.currentUser();
  }

  render() {
  const childProps = {
    isAuthenticated: this.props.session,
    userHasAuthenticated: this.userHasAuthenticated
  };
    return (
      <div className='App'>
       <h1>Tell us your secrets</h1>
            {this.props.session
              ? <NavItem onClick={this.handleLogout.bind(this)}>Logout</NavItem>
              : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }
          <Routes childProps={childProps}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    session: state.user.session 
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      loginUser: loginUser,
      logOut: logOut, 
      currentUser: currentUser
    }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);