import React from 'react';
import "./style.css"
import TextInput from "../TextInput";

class LoginPage extends Component {
    render() {
        return (
           <form>
               <TextInput id="username" placeholder="JaneDoe" labelText="Username"/>
               <TextInput id="password" placeholder="******" labelText="Password"/>
               <button className="btn btn-info custom-color">Submit</button>
           </form>
        )
    }
}

export default LoginPage;