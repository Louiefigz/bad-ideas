import React, { Component } from "react";
import { Auth } from "aws-amplify";


export default class Login extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email: "",
      verify: "",

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

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(this.state.email, this.state.verify);

    this.props.userHasAuthenticated(true);
      alert("Logged in");
    } catch (e) {
      var e = e;
      debugger
      alert(e.message);
    }
  }

  render() {
    console.log('test')
    return (
      <div className="Login">

        Email
        <input value={this.state.email} id='email' onChange={this.handleChange.bind(this)} />
            verify
          <input value={this.state.verify} id='verify' onChange={this.handleChange.bind(this)} />
        <button  onClick={this.handleSubmit}> Submit</button>
      </div>
    );
  }
}
