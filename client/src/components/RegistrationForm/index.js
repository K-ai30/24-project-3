import React, { Component } from 'react';
import "./style.css";
import Col from '../Col';
import Row from '../Row';
import TextInput from "../TextInput";

import API from '../../utils/API';

class RegistrationForm extends Component {
    state = {
        userInfo: [],
        community: []
    };
    componentDidMount() {
        this.GetAllCommunity();

    };
    GetAllCommunity() {
        API.AllCommunity()
            .then((res) => {
                console.log("All Community", res.data)
                let allCommunity = res.data.map(community => {

                    return community.name
                })
                this.setState({ community: allCommunity })

            })


    }

    render() {
        return (
            <form className="wrapper mx-auto align-middle">
                <Row>
                    <Col>
                        <div className="input-group mb-3" labeltext="Community">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Community</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option defaultValue disabled>Choose...</option>
                                {this.state.community.map((community, index) => {
                                    return <option key={index} value={community}>{community}</option>
                                })}
                            </select>
                        </div>
                        <div className="input-group mb-3" labeltext="ageBracket">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Age Bracket</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option defaultValue>Choose...</option>
                                <option value="1">Senior</option>
                                <option value="2">Parent</option>
                                <option value="3">Adult</option>
                                <option value="4">Youth</option>
                            </select>
                        </div>
                        <TextInput id="first-name" placeholder="Jane" labeltext="First Name" />
                        <TextInput id="phone" placeholder="(404) 300-5000" labeltext="Phone Number" />
                        <TextInput id="addressOne" placeholder="123 Some Street" labeltext="Address 1" />
                        <TextInput id="city" placeholder="Atlanta" labeltext="City" />
                        <TextInput id="state" placeholder="Georgia" labeltext="State" />
                    </Col>
                    <Col>
                        <TextInput id="dateOfBirth" placeholder="05/01/1959" labeltext="Date of Birth" />
                        <div className="input-group">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" for="exampleRadios1">Female</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" for="exampleRadios1">Male</label>
                            </div>
                        </div>
                        <TextInput id="last-name" placeholder="Smith" labeltext="Last Name" />
                        <TextInput id="emailTwo" placeholder="Jane_Smith@test.com" labeltext="Email" />
                        <TextInput id="password" placeholder="******" labeltext="Password" />
                        <TextInput id="addressTwo" placeholder="Apt 100" labeltext="Address 2" />
                        <TextInput id="zip" placeholder="30310" labeltext="Zip" />
                    </Col>
                </Row>
                <button id="submitResident" className="btn btn-info custom-color">+ Add Resident</button>
            </form>
        )
    }
}

export default RegistrationForm;