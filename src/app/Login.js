import React, { Component } from "react";
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { loginUser } from '../actions/Auth';
import { withRouter } from 'react-router';


class Login extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email: "",
      password: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let credentials = {
      email: this.state.email, 
      password: this.state.password      
    }
    this.props.loginUser(credentials, this.props.history, "/");
  }

  render() {



    return (
      <div className="Login">

        Email
        <input value={this.state.email} id='email' onChange={this.handleChange.bind(this)} />
            Password
          <input value={this.state.password} id='password' onChange={this.handleChange.bind(this)} />
        <button  onClick={this.handleSubmit}> Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      loginUser: loginUser}, dispatch)
}

export default withRouter(
  connect(null, mapDispatchToProps)(Login)
);