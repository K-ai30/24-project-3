import React, { Component } from 'react';
import "./style.css";
import Col from '../Col';
import Row from '../Row';
import TextInput from "../TextInput";
// import GraphBanner from '../BannerImage';

class RegistrationForm extends Component {
 state = {
     title: null,
     date: '',
 };

 render() {
     return (
         <form className="wrapper">
            <button id="addEvent" className="btn btn-info custom-color">+ Add Event</button>
            <Row>
                <Col>
                <div className="input-group mb-3" labelText="Community">
                <div className="input-group-prepend">
                    <label className="input-group-text" HTMLfor="inputGroupSelect01">Community</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">Community 1</option>
                    <option value="2">Community 2</option>
                    <option value="3">Community 3</option>
                    <option value="4">Community 4</option>
                    <option value="5">Community 5</option>
                </select>
                </div>
                    <TextInput id="first-name" placeholder="Jane" labelText="First Name"/>
                    <TextInput id="phone" placeholder="(404) 300-5000" labelText="Phone Number"/>
                    <TextInput id="addressOne" placeholder="123 Some Street" labelText="Address 1" />
                    <TextInput id="city" placeholder="Atlanta" labelText="City" />
                </Col>
                <Col>
                    <TextInput id="dateOfBirth" placeholder="05/01/1959" labelText="Date of Birth"/>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input"/>
                            </div>
                        </div>
                        <input type="text" className="form-control col-6" aria-label="Text input with radio button"/>
                        <div className="input-group-prepend" id="field">
                            <div className="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input"/>
                            </div>
                        </div>
                        <input type="text" className="form-control col-6" aria-label="Text input with radio button"/>
                    </div>
                    <TextInput id="last-name" placeholder="Smith" labelText="Last Name"/>
                    <TextInput id="email" placeholder="Jane_Smith@test.com" labelText="Email" />
                    <TextInput id="addressTwo" placeholder="Apt 100" labelText="Address 2" />
                    <TextInput id="state" placeholder="Georgia" labelText="State" />
                </Col>
            </Row>
            <button id="submitResident" className="btn btn-info custom-color">Submit</button>
        </form>
     )
  }
}

export default RegistrationForm;