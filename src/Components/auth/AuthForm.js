import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signUpOperation, signInOperation } from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/register") {
      this.props.signUpOperation(this.state);
    } else this.props.signInOperation(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <input type="text" name="email" onChange={this.onHandleChange} value={email} />
        </label>
        <label>
          <input type="text" name="password" onChange={this.onHandleChange} value={password} />
        </label>
        <button type="submit">{this.props.location.pathname === "/register" ? "signUp" : "signIn"}</button>
      </form>
    );
  }
}

export default connect(null, { signUpOperation, signInOperation })(withRouter(AuthForm));
