import React from 'react';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
//import Banner image
function App() {
  return (
    //<BannerImage/>

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={RegistrationForm}/>
          <Route exact path="/register" component={RegistrationForm}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
