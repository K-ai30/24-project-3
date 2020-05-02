import React from 'react';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import './assets/css/global.css';
import SignUpForm from "./components/SingnUpForm"
import EventForm from "./components/EventForm"
//import Banner image
function App() {
  return (
    //<BannerImage/>

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/register" component={RegistrationForm}/>
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/event" component={EventForm}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
