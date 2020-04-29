import React, { Component } from 'react';
import "./style.css";
import Col from '../Col';
import Row from '../Row';
import TextInput from "../TextInput";

class RegistrationForm extends Component {
 state = {
     title: null,
     date: '',
 };

 render() {
     return (
        <form>
            <Row>
                <Col>
                    <TextInput id="first-name" placeholder="Jane" labelText="First Name"/>
                    <TextInput id="phone" placeholder="(404) 300-5000" labelText="Phone Number"/>
                    <TextInput id="addressOne" placeholder="123 Some Street" labelText="Address 1" />
                    <TextInput id="city" placeholder="Atlanta" labelText="City" />
                </Col>
                <Col>
                    <TextInput id="dateOfBirth" placeholder="05/01/1959" labelText="Date of Birth"/>
                    <TextInput id="last-name" placeholder="Smith" labelText="Last Name"/>
                    <TextInput id="email" placeholder="Jane_Smith@test.com" labelText="Email" />
                    <TextInput id="addressTwo" placeholder="Apt 100" labelText="Address 2" />
                    <TextInput id="state" placeholder="Georgia" labelText="State" />
                </Col>
            </Row>
            <button className="btn btn-info custom-color">Submit</button>
        </form>
     )
  }
}

export default RegistrationForm;