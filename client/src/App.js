import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/global.css';
import Navbar from "./components/Navbar/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginPage from "./components/LoginPage";

import './assets/css/global.css';
import AllEvents from './components/AllEvents_page/index';
import SignUpForm from "./components/SignUpForm";
import EventForm from "./components/EventForm";
import ReportPage from './components/Reports';
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./components/Dashboard";
import UpdateAttendance from "./components/Update-attendance";
import ChartHistory from './components/ChartHistory';




function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <ProtectedRoute exact path="/updateattendance" component={UpdateAttendance}/>
          <ProtectedRoute exact path="/events" component={EventForm}/>
          <ProtectedRoute exact path="/register" component={RegistrationForm}/>
          <ProtectedRoute exact path="/signup" component={SignUpForm}/>
          <ProtectedRoute exact path="/event" component={EventForm}/>
          <ProtectedRoute exact path="/allevents" component={AllEvents}/>
          <ProtectedRoute exact path="/reports" component={ReportPage}/>
          <ProtectedRoute exact path="/charthistory" component={ChartHistory}/>
          <ProtectedRoute exact path="/dashboard" component={DashboardPage}/>
          <Route exact path="/" component={LoginPage}/>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
