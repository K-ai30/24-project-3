import React, { Component } from 'react';
import "./style.css";
import TextInput from "../TextInput";
import axios from "axios";

class LoginPage extends Component {
    state = {
        title: null,
        date: '',
        email:'',
        password:''
    };

    handleOnSubmit(event){
        event.preventDefault();
        axios.post("/api/auth/",{email:event.target[0].value,password:event.target[1].value}).then((data)=>console.log(data))

    }
    render() {
        return (
           <form className="wrapper mx-auto align-middle" onSubmit={(event)=>{this.handleOnSubmit(event)}}>
               <TextInput id="emailOne" placeholder="Jane_Doe@testemail.com" labelText="Email"/>
               <TextInput id="password" placeholder="******" labelText="Password"/>
               <button id="login" className="btn btn-info custom-color">Login</button>
            <button id="signup" className="btn btn-info custom-color">Sign up</button>
           </form>
        )
    }
}

export default LoginPage;