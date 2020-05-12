import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import axios from "axios";
import LoginPage from "../LoginPage";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
 function PrivateRoute({ children, ...rest }) {
  const [state, setState] = useState({isAuthenticated:false});

    useEffect(() => {
      const fetchdata =async ()=>{
       const res = await axios.get("/api/auth/isUserLoggedIn");
        if(res.data.loggedIn){
          console.log("trying ot set state to true!");
          setState({isAuthenticated:true});
        }
      }
      fetchdata();
    }, [])
    console.log("the state is: "+ state.isAuthenticated);
    if(state.isAuthenticated){
       return (
        <Route {...rest} render={() => children }/>
       ) 
    }
    else{
      return (<LoginPage  />)
    }
}

export default PrivateRoute;
