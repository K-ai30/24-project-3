import React, { Component } from 'react';
import "./style.css";
import TextInput from "../TextInput";

class LoginPage extends Component {
    state = {
        title: null,
        date: '',
    };

    render() {
        return (
           <form className="wrapper mx-auto align-middle">
               <TextInput id="username" placeholder="Jane Doe" labelText="Username"/>
               <TextInput id="password" placeholder="******" labelText="Password"/>
               <button id="login" className="btn btn-info custom-color">Login</button>
            <button id="signup" className="btn btn-info custom-color">Sign up</button>
           </form>
        )
    }
}

export default LoginPage;