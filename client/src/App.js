import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/global.css';
import Navbar from "./components/Navbar/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginPage from "./components/LoginPage";

import './assets/css/global.css';
import EventForm from "./components/EventForm";
import AllEvents from './components/AllEvents_page/index';
import SignUpForm from "./components/SignUpForm";
import EventForm from "./components/EventForm";
import ReportPage from './components/Reports';
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/events" component={EventForm}/>
          <Route exact path="/register" component={RegistrationForm}/>
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/event" component={EventForm}/>
          <Route exact path="/allevents" component={AllEvents}/>
          <Route exact path="/reports" component={ReportPage}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
