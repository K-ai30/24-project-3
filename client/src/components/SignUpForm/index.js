import React, { Component } from "react";
import "./style.css";
import TextInput from "../TextInput";

class SignupPage extends Component {
  state = {
    title: null,
    date: "",
  };

  render() {
    return (
      <div>
        <form className="wrapper mx-auto align-middle">
          <h2 className="formtitle">Sign-Up</h2>
          <TextInput id="name" placeholder="Jane Doe" labelText="First" />
          <TextInput
            id="username"
            placeholder="Username"
            labelText="Last Name"
          />
          <TextInput
            id="email"
            placeholder="E-mail Adress"
            labelText="E-mail Adress"
          />
          <TextInput id="password" placeholder="******" labelText="Password" />
          <TextInput
            id="confirm password"
            placeholder="******"
            labelText="Confirm Password"
          />
          <button id="login" className="btn btn-info custom-color" to="/">
            Login
          </button>
          <button id="signup" className="btn btn-info custom-color">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
