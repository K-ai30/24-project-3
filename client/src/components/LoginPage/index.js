import React, { Component } from 'react';
import route, { Redirect } from 'react-router-dom';
import "./style.css";
import TextInput from "../TextInput";
import axios from "axios";
import DashboardPage from "../Dashboard"

class LoginPage extends Component {
    state = {
        loggedIn:false
    };


    handleOnSubmit(event){
        event.preventDefault();
        axios.post("/api/auth/",{email:event.target[0].value,password:event.target[1].value})
        .then((res)=>{
            if(res.data.password){
                this.setState( {loggedIn:true})
                window.location.reload();   
            }
                  
        })

    }
    render() {
        if(this.state.loggedIn){
           return( <Redirect from="/" to="/Dashboard"/>)
        }
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